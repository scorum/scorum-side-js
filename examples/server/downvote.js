const scorum = require('../config/scorum');
const users = require('../config/users');

(async () => {
  try {
    const response = await scorum.broadcast.downvoteWithAsync(users.leonarda.privateKey, {
      account: users.leonarda.account,
      author: users.kristie.account,
      permlink: 'permlink',
      reason: 'spam',
      comment: 'comment'
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
