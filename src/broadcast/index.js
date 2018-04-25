import Promise from 'bluebird';
import newDebug from 'debug';

import broadcastHelpers from './helpers';
import formatterFactory from '../formatter';
import operations from './operations';
import scorumAPI from '../api';
import scorumAuth from '../auth';
import { camelCase } from '../utils';

const debug = newDebug('scorum:broadcast');
const noop = () => { };
const formatter = formatterFactory(scorumAPI);

const scorumBroadcast = {};

// Base transaction logic -----------------------------------------------------

/**
 * Sign and broadcast transactions on the scorum network
 */

scorumBroadcast.send = function scorumBroadcast$send(trx, privKeys, callback) {
  const resultP = scorumBroadcast
    ._prepareTransaction(trx)
    .then(transaction => {
      debug('Signing transaction (transaction, transaction.operations)', transaction, transaction.operations);
      return Promise.join(transaction, scorumAuth.signTransaction(transaction, privKeys));
    })
    .spread((transaction, signedTransaction) => {
      debug('Broadcasting transaction (transaction, transaction.operations)', transaction, transaction.operations);
      return scorumAPI.broadcastTransactionSynchronousAsync(signedTransaction).then(result => {
        return Object.assign({}, result, signedTransaction);
      });
    });

  resultP.nodeify(callback || noop);
};

scorumBroadcast._prepareTransaction = function scorumBroadcast$_prepareTransaction(trx) {
  return Promise.resolve(
    Object.assign(
      {
        ref_block_num: 0,
        ref_block_prefix: 0,
        expiration: new Date(Date.now() + 600 * 1000)
      },
      trx
    )
  );
};

// Generated wrapper ----------------------------------------------------------

// Generate operations from operations.json
operations.forEach(operation => {
  const operationName = camelCase(operation.operation);
  const operationParams = operation.params || [];

  const useCommentPermlink =
    operationParams.indexOf('parent_permlink') !== -1 && operationParams.indexOf('parent_permlink') !== -1;

  scorumBroadcast[`${operationName}With`] = function scorumBroadcast$specializedSendWith(wif, options, callback) {
    debug(`Sending operation "${operationName}" with`, { options, callback });
    const keys = {};
    if (operation.roles && operation.roles.length) {
      keys[operation.roles[0]] = wif; // TODO - Automatically pick a role? Send all?
    }
    return scorumBroadcast.send(
      {
        extensions: [],
        operations: [
          [
            operation.operation,
            Object.assign(
              {},
              options,
              options.json_metadata != null
                ? {
                  json_metadata: toString(options.json_metadata)
                }
                : {},
              useCommentPermlink && options.permlink == null
                ? {
                  permlink: formatter.commentPermlink(options.parent_author, options.parent_permlink)
                }
                : {}
            )
          ]
        ]
      },
      keys,
      callback
    );
  };

  scorumBroadcast[operationName] = function scorumBroadcast$specializedSend(wif, ...args) {
    debug(`Parsing operation "${operationName}" with`, { args });;
    const options = operationParams.reduce((memo, param, i) => {
      memo[param] = args[i]; // eslint-disable-line no-param-reassign
      return memo;
    }, {});

    const callback = args[operationParams.length];
    return scorumBroadcast[`${operationName}With`](wif, options, callback);
  };
});

const toString = obj => (typeof obj === 'object' ? JSON.stringify(obj) : obj);
broadcastHelpers(scorumBroadcast);

Promise.promisifyAll(scorumBroadcast);

exports = module.exports = scorumBroadcast;
