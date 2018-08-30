const scorum = require('../config/scorum');
const users = require('../config/users');

(async () => {
  try {
    const response = await scorum.broadcast.removeDownvoteWithAsync(users.leonarda.privateKey, {
      account: users.leonarda.account,
      author: users.kristie.account,
      permlink: 'permlink'
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
