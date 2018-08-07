const scorum = require('../config/scorum');

(async () => {
  try {
    const response = await scorum.api.getBlacklistWithAsync({
      offset: 0,
      limit: 10
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
