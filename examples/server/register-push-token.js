const scorum = require('../config/scorum');
const users = require('../config/users');

(async () => {
  try {
    const response = await scorum.broadcast.registerPushTokenWithAsync(users.kristie.privateKey, {
      account: users.kristie.account,
      token: '12345678',
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
