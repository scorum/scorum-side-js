import fetch from 'cross-fetch';
import newDebug from 'debug';
import Transport from './base';

const debug = newDebug('scorum:http');

const CONVERT_METHODS = [
  'get_address',
  'estimate_scr_amount',
  'estimate_eth_amount',
  'get_eth_scr_fixed_price',
  'scr_supply',
  'get_orders'
];

class RPCError extends Error {
  constructor(rpcError) {
    super(rpcError.message);
    this.name = 'RPCError';
    this.code = rpcError.code;
    this.data = rpcError.data;
  }
}

export function jsonRpc(url, { method, id, params }) {
  const payload = { id, jsonrpc: '2.0', method, params };
  return fetch(url, {
    body: JSON.stringify(payload),
    method: 'post',
    mode: 'cors',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      if (!res.ok) {
        throw new Error(`HTTP ${res.status}: ${res.statusText}`);
      }
      return res.json();
    })
    .then(rpcRes => {
      if (rpcRes.id !== id) {
        throw new Error(`Invalid response id: ${rpcRes.id}`);
      }
      if (rpcRes.error) {
        throw new RPCError(rpcRes.error);
      }
      return rpcRes.result;
    });
}

export default class HttpTransport extends Transport {
  send(api, data, callback) {
    let url = this.options.url;
    if (CONVERT_METHODS.includes(data.method)) {
      url = this.options.convert_url;
      if (!url) {
        throw new Error(`convert_url is ${url}. Check please`);
      }
    }
    debug('Scorum::send', api, data);
    const id = data.id || this.id++;
    const params = [api, data.method, data.params];
    jsonRpc(url, { method: 'call', id, params }).then(
      res => callback(null, res),
      err => callback(err),
    );
  }
}
