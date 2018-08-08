
const scorum = require('../config/scorum');
const users = require('../config/users');

(async () => {
  try {
    const response = await scorum.api.getTitlesWithAsync(users.kristie.privateKey, {
      account: users.kristie.account,
      parameters: [ ['url1', 'url2'] ],
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
