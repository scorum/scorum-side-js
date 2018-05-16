const scorum = require('../config/scorum');
const users = require('../config/users');

(async () => {
  try {
    const response = await scorum.broadcast.removeCategoryAdminWithAsync(users.roselle.privateKey, {
      account: users.roselle.account,
      domain: 'com',
      label: 'soccer',
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
