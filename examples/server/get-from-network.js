const scorum = require('../config/scorum');
const users = require('../config/users');

(async () => {
  try {
    const response = await scorum.api.getFromNetworkWithAsync({
      account: users.kristie.account,
      domain: 'com',
      from: 0,
      limit: 10
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
