const scorum = require('../config/scorum');

(async () => {
  try {
    const response = await scorum.api.getPlagiarismCheckDetailsWithAsync({
      author: 'author',
      permlink: 'permlink'
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
