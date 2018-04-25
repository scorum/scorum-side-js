const scorum = require('../config/scorum');
const users = require('../config/users');

(async () => {
  try {
    const accountMediaBucket = `https://scorumblogdev.blob.core.windows.net/media/${users.kristie.account}`;
    const response = await scorum.broadcast.updateProfileWithAsync(users.kristie.privateKey, {
      account: users.kristie.account,
      username: 'Kristie Smith',
      location: 'New York',
      bio: 'The biography is here...',
      avatar_url: `${accountMediaBucket}/avatar`,
      cover_url: `${accountMediaBucket}/cover`,
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
