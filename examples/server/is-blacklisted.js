const scorum = require('../config/scorum');
const users = require('../config/users');

(async () => {
  try {
    const response = await scorum.api.isBlacklistedWithAsync({
      account: users.kristie.account,
      permlink: `${users.kristie.account}/my-post`
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
