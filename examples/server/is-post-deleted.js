const scorum = require('../config/scorum');
const users = require('../config/users');

(async () => {
  try {
    const response = await scorum.api.isPostDeletedWithAsync({
      account: users.kristie.account,
      permlink: 'test'
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
