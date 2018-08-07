
const scorum = require('../config/scorum');
const users = require('../config/users');

(async () => {
  try {
    const response = await scorum.api.checkPlagiarismWithAsync(users.kristie.privateKey, {
      account: users.kristie.account,
      parameters: ['permlink', 'text', 'domain'],
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
