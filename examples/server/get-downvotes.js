const scorum = require('../config/scorum');
const users = require('../config/users');

(async () => {
  try {
    const response = await scorum.api.getDownvotesWithAsync({
      author: users.kristie.account,
      permlink: 'permlink',
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
