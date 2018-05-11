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
  }
];
