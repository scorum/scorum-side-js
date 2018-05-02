const scorum = require('../config/scorum');
const users = require('../config/users');

(async () => {
  try {
    const response = await scorum.api.filterFollowingWithAsync({
      account: users.kristie.account,
      accounts_to_check: [users.leonarda.account, users.noelle.account]
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
