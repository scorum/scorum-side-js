const scorum = require('../config/scorum');
const users = require('../config/users');

(async () => {
  try {
    const response = await scorum.api.getMediaWithAsync({
      account: users.kristie.account,
      id: 'avatar',
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
