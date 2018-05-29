const scorum = require('../config/scorum');
const users = require('../config/users');

(async () => {
  try {
    const response = await scorum.api.getTrustedWithAsync({
      offset: 0,
      limit: 10
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
