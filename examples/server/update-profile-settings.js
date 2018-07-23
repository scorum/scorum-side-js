const scorum = require('../config/scorum');
const users = require('../config/users');

(async () => {
  try {
    const response = await scorum.broadcast.updateProfileSettingsWithAsync(users.kristie.privateKey, {
      account: users.kristie.account,
      enable_email_unseen_notifications: true,
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
