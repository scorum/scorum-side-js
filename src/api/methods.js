export default [
  {
    api: 'network_broadcast_api',
    method: 'broadcast_transaction',
    params: ['trx']
  },
  {
    api: 'network_broadcast_api',
    method: 'broadcast_transaction_with_callback',
    params: ['confirmationCallback', 'trx']
  },
  {
    api: 'network_broadcast_api',
    method: 'broadcast_transaction_synchronous',
    params: ['trx']
  },
  {
    api: 'account_api',
    method: 'get_profile',
    params: ['account']
  },
  {
    api: 'media_api',
    method: 'get_media',
    params: ['cb']
  },
  {
    api: 'follow_api',
    method: 'get_followers',
    params: ['cb']
  },
  {
    api: 'follow_api',
    method: 'get_following',
    params: ['cb']
  }
];
