module.exports = [
  {
    roles: ['active', 'owner'],
    operation: 'register',
    params: ['account']
  },
  {
    roles: ['active', 'owner'],
    operation: 'update_profile',
    params: ['account', 'display_name', 'location', 'bio', 'avatar_url', 'cover_url']
  },
  {
    roles: ['active', 'owner'],
    operation: 'follow',
    params: ['account', 'follow']
  },
  {
    roles: ['active', 'owner'],
    operation: 'unfollow',
    params: ['account', 'unfollow']
  },
  {
    roles: ['active', 'owner'],
    operation: 'upload_media',
    params: ['account', 'id', 'media', 'content_type']
  },
  {
    roles: ['active', 'owner'],
    operation: 'add_to_blacklist',
    params: ['account', 'permlink']
  },
  {
    roles: ['active', 'owner'],
    operation: 'add_to_blacklist_admin',
    params: ['account', 'blog_account', 'permlink']
  },
  {
    roles: ['active', 'owner'],
    operation: 'remove_from_blacklist_admin',
    params: ['account', 'blog_account', 'permlink']
  },
  {
    roles: ['active', 'owner'],
    operation: 'add_category_admin',
    params: ['account', 'domain', 'label', 'order', 'localization_key']
  },
  {
    roles: ['active', 'owner'],
    operation: 'remove_category_admin',
    params: ['account', 'domain', 'label']
  },
  {
    roles: ['active', 'owner'],
    operation: 'update_category_admin',
    params: ['account', 'domain', 'label', 'order', 'localization_key']
  },
  {
    roles: ['active', 'owner'],
    operation: 'set_account_trusted_admin',
    params: ['account', 'blog_account', 'is_trusted']
  }
];
