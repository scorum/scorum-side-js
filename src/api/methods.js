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
    api: 'account_api',
    method: 'get_profiles',
    params: ['accounts']
  },
  {
    api: 'media_api',
    method: 'get_media',
    params: ['account', 'id']
  },
  {
    api: 'follow_api',
    method: 'get_followers',
    params: ['account', 'from', 'limit']
  },
  {
    api: 'follow_api',
    method: 'get_following',
    params: ['account', 'from', 'limit']
  },
  {
    api: 'follow_api',
    method: 'filter_following',
    params: ['account', 'accounts_to_check']
  },
  {
    api: 'category_api',
    method: 'get_categories',
    params: ['domain']
  },
  {
    api: 'blacklist_api',
    method: 'get_blacklist',
    params: ['offset', 'limit']
  },
  {
    api: 'blacklist_api',
    method: 'is_blacklisted',
    params: ['account', 'permlink']
  },
  {
    api: 'account_api',
    method: 'is_trusted',
    params: ['account']
  },
  {
    api: 'account_api',
    method: 'get_trusted',
    params: ['offset', 'limit']
  },
];
