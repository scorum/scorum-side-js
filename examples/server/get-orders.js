
const scorum = require('../config/scorum');
const users = require('../config/users');

(async () => {
  try {
    const response = await scorum.api.getOrdersWithAsync(users.kristie.privateKey, {
      account: users.kristie.account,
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
