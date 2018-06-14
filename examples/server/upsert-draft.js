const scorum = require('../config/scorum');
const users = require('../config/users');

(async () => {
  try {
    const response = await scorum.broadcast.upsertDraftWithAsync(users.kristie.privateKey, {
      account: users.kristie.account,
      id: 'someId1234',
      title: 'Some title',
      body: 'Some body',
      json_metadata: '{"saved": true}'
    });
    console.log(response);
  } catch (err) {
    console.error(err);
  }
})();
