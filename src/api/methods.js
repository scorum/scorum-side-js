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
  {
    api: 'draft_api',
    method: 'get_draft',
    params: ['account', 'salt', 'signature', 'parameters']
  },
  {
    api: 'draft_api',
    method: 'get_drafts',
    params: ['account', 'salt', 'signature']
  },
  {
    api: 'notification_api',
    method: 'get_notifications',
    params: ['account', 'salt', 'signature']
  },
  {
    api: 'post_api',
    method: 'is_post_deleted',
    params: ['account', 'permlink']
  },
  {
    api: 'post_api',
    method: 'get_deleted_posts',
    params: ['offset', 'limit']
  },
  {
    api: 'account_api',
    method: 'get_profile_settings',
    params: ['account', 'salt', 'signature', 'parameters']
  },
  {
    api: 'eth_api',
    method: 'get_address',
    params: ['account', 'salt', 'signature', 'parameters']
  },
  {
    api: 'eth_api',
    method: 'estimate_scr_amount',
    params: ['account', 'salt', 'signature', 'parameters']
  },
  {
    api: 'eth_api',
    method: 'estimate_eth_amount',
    params: ['account', 'salt', 'signature', 'parameters']
  },
  {
    api: 'eth_api',
    method: 'scr_supply',
    params: ['account', 'salt', 'signature', 'parameters']
  },
  {
    api: 'account_api',
    method: 'get_orders',
    params: ['account', 'salt', 'signature', 'parameters']
  },
  {
    api: 'post_api',
    method: 'get_from_network',
    params: ['account', 'domain', 'offset', 'limit']
  },
  {
    api: 'post_api',
    method: 'check_plagiarism',
    params: ['account', 'salt', 'signature', 'parameters']
  },
  {
    api: 'post_api',
    method: 'get_plagiarism_check_details',
    params: ['author', 'permlink']
  },
  {
    api: 'post_api',
    method: 'get_votes',
    params: ['author', 'permlink']
  },
  {
    api: 'sites_api',
    method: 'get_titles',
    params: ['account', 'salt', 'signature', 'parameters']
  },
  {
    api: 'post_api',
    method: 'get_downvotes',
    params: ['author', 'permlink']
  }
];
