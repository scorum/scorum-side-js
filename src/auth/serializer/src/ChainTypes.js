var ChainTypes;

module.exports = ChainTypes = {};

ChainTypes.reserved_spaces = {
  relative_protocol_ids: 0,
  protocol_ids: 1,
  implementation_ids: 2
};

ChainTypes.operations = {
  register: 0,
  update_profile: 1,
  follow: 2,
  unfollow: 3,
  upload_media: 4,
  mark_post_deleted: 5,
  add_to_blacklist_admin: 6,
  remove_from_blacklist_admin: 7,
  add_category_admin: 8,
  remove_category_admin: 9,
  update_category_admin: 10,
  set_account_trusted_admin: 11,
  upsert_draft: 12,
  remove_draft: 13,
  mark_notification_read: 14,
  mark_all_notifications_read: 15
};

ChainTypes.proposal_operations = {};

//types.hpp
ChainTypes.object_type = {
  null: 0,
  base: 1
};
