const scorum = require('../config/scorum');
const users = require('../config/users');

(async () => {
  try {
    const response = await scorum.api.getDeletedPostsWithAsync({
      account: users.kristie.account,
      offset: 0,
      limit: 100
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
