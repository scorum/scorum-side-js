const scorum = require('../config/scorum');
const users = require('../config/users');

(async () => {
  try {
    const response = await scorum.api.getFollowingWithAsync({
      account: users.kristie.account,
      from: 0,
      limit: 10
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
