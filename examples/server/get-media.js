const scorum = require('../config/scorum');
const users = require('../config/users');

(async () => {
  try {
    const response = await scorum.api.getMediaWithAsync({
      account: users.kristie.account,
      id: '1',
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
