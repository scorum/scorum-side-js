
const scorum = require('../config/scorum');
const users = require('../config/users');

(async () => {
  try {
    const response = await scorum.api.estimateEthAmountWithAsync(users.kristie.privateKey, {
      account: users.kristie.account,
      parameters: [0.24],
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
