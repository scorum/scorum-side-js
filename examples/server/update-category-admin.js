const scorum = require('../config/scorum');
const users = require('../config/users');

(async () => {
  try {
    const response = await scorum.broadcast.updateCategoryAdminWithAsync(users.roselle.privateKey, {
      account: users.roselle.account,
      domain: 'com',
      label: 'soccer',
      order: 2,
      localization_key: 'en.soccer'
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
