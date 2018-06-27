const scorum = require('../config/scorum');
const users = require('../config/users');

(async () => {
  try {
    const response = await scorum.broadcast.markNotificationReadWithAsync(users.kristie.privateKey, {
      account: users.kristie.account,
      id: '0116214d-090d-4be3-bbdb-6e427309cae6'
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
