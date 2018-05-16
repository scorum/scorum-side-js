const scorum = require('../config/scorum');
const users = require('../config/users');

(async () => {
  try {
    const response = await scorum.broadcast.setAccountTrustedAdminWithAsync(users.roselle.privateKey, {
      account: users.roselle.account,
      blog_account: users.kristie.account,
      is_trusted: true
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
