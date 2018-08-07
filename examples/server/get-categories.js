const scorum = require('../config/scorum');

(async () => {
  try {
    const response = await scorum.api.getCategoriesWithAsync({
      domain: 'com'
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
