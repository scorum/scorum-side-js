const scorum = require('../config/scorum');
const users = require('../config/users');

(async () => {
  try {
    const response = await scorum.broadcast.unfollowWithAsync(users.kristie.privateKey, {
      account: users.kristie.account,
      unfollow: users.leonarda.account,
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
