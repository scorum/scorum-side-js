const scorum = require('../config/scorum');
const users = require('../config/users');

(async () => {
  try {
    const response = await scorum.broadcast.addCategoryAdminWithAsync(users.roselle.privateKey, {
      account: users.roselle.account,
      domain: 'com',
      label: 'soccer',
      order: 1,
      localization_key: 'en.soccer'
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
