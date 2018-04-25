module.exports = [
  {
    roles: ['active', 'owner'],
    operation: 'register',
    params: ['account']
  },
  {
    roles: ['active', 'owner'],
    operation: 'update_profile',
    params: ['account']
  },
  {
    roles: ['active', 'owner'],
    operation: 'follow',
    params: ['account']
  },
  {
    roles: ['active', 'owner'],
    operation: 'unfollow',
    params: ['account']
  },
  {
    roles: ['active', 'owner'],
    operation: 'upload_media',
    params: ['account']
  }
];
