const scorum = require('../config/scorum');
const users = require('../config/users');

(async () => {
  try {
    const response = await scorum.broadcast.uploadMediaWithAsync(users.kristie.privateKey, {
      account: users.kristie.account,
      id: 'avatar',
      media: 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+G9cDwAD7AGzzUnfcwAAAABJRU5ErkJggg==',
      content_type: 'image/png',
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
