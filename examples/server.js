var scorum = require('../lib');

scorum.api.setOptions({ url: 'https://blog-api-dev.scorum.com/' });
scorum.config.set('address_prefix', 'SCR');
scorum.config.set('chain_id', 'd3c1f19a4947c296446583f988c43fd1a83818fabaf3454a0020198cb361ebd2');

async function init() {
  const a = await scorum.api.getProfileAsync('kristie');
  // const a = await scorum.broadcast.registerAsync('', 'kristie');
  console.log(a);
}

init();
