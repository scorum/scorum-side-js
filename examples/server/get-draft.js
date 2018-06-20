
const scorum = require('../config/scorum');
const users = require('../config/users');

(async () => {
  try {
    const response = await scorum.api.getDraftWithAsync(users.kristie.privateKey, {
      account: users.kristie.account,
      parameters: ['someId1234'],
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
