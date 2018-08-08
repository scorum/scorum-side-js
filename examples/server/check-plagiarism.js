
const scorum = require('../config/scorum');
const users = require('../config/users');

(async () => {
  try {
    const response = await scorum.api.checkPlagiarismWithAsync(users.kristie.privateKey, {
      account: users.kristie.account,
      parameters: ['permlink', 'text', 'me'],
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
