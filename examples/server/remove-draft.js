const scorum = require('../config/scorum');
const users = require('../config/users');

(async () => {
  try {
    const response = await scorum.broadcast.removeDraftWithAsync(users.kristie.privateKey, {
      account: users.kristie.account,
      id: 'someId1234'
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
