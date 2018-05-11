const scorum = require('../config/scorum');
const users = require('../config/users');

(async () => {
  try {
    const response = await scorum.broadcast.addToBlacklistAdminWithAsync(users.roselle.privateKey, {
      account: users.roselle.account,
      blog_account: users.kristie.account,
      permlink: `${users.kristie.account}/my-post`
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
