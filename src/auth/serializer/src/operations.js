import types from './types';
import SerializerImpl from './serializer';

const {
  //id_type,
  //varint32, uint8, int64, fixed_array, object_id_type, vote_id, address,
  uint16,
  uint32,
  int16,
  uint64,
  string,
  string_binary,
  bytes,
  bool,
  array,
  // protocol_id_type,
  static_variant,
  map,
  set,
  public_key,
  time_point_sec,
  optional,
  asset
} = types;

const future_extensions = types.void;
const hardfork_version_vote = types.void;
const version = types.void;

const operation = static_variant();
module.exports.operation = operation;

// For module.exports
const Serializer = function(operation_name, serilization_types_object) {
  const s = new SerializerImpl(operation_name, serilization_types_object);
  return (module.exports[operation_name] = s);
};

const signed_transaction = new Serializer('signed_transaction', {
  ref_block_num: uint16,
  ref_block_prefix: uint32,
  expiration: time_point_sec,
  operations: array(operation),
  extensions: set(future_extensions),
  signatures: array(bytes(65))
})

const signed_method = new Serializer('signed_method', {
  account: string,
  salt: string,
});

const signed_param_method = new Serializer('signed_param_method', {
  account: string,
  salt: string,
  parameters: string,
});

const register = new Serializer('register', {
  account: string
});

const update_profile = new Serializer('update_profile', {
  account: string,
  display_name: string,
  location: string,
  bio: string,
  avatar_url: string,
  cover_url: string
});

const follow = new Serializer('follow', {
  account: string,
  follow: string
});

const unfollow = new Serializer('unfollow', {
  account: string,
  unfollow: string
});

const upload_media = new Serializer('upload_media', {
  account: string,
  id: string,
  media: string,
  content_type: string
});

const mark_post_deleted = new Serializer('mark_post_deleted', {
  account: string,
  permlink: string
});

const add_to_blacklist_admin = new Serializer('add_to_blacklist_admin', {
  account: string,
  blog_account: string,
  permlink: string
});

const remove_from_blacklist_admin = new Serializer('remove_from_blacklist_admin', {
  account: string,
  blog_account: string,
  permlink: string
});

const add_category_admin = new Serializer('add_category_admin', {
  account: string,
  domain: string,
  label: string,
  localization_key: string
});

const remove_category_admin = new Serializer('remove_category_admin', {
  account: string,
  domain: string,
  label: string
});

const update_category_admin = new Serializer('update_category_admin', {
  account: string,
  domain: string,
  label: string,
  order: uint32,
  localization_key: string
});

const set_account_trusted_admin = new Serializer('set_account_trusted_admin', {
  account: string,
  blog_account: string,
  is_trusted: bool
});

const upsert_draft = new Serializer('upsert_draft', {
  account: string,
  id: string,
  title: string,
  body: string,
  json_metadata: string
});

const remove_draft = new Serializer('remove_draft', {
  account: string,
  id: string
});

const mark_notification_read = new Serializer('mark_notification_read', {
  account: string,
  id: string
});

const mark_all_notifications_read = new Serializer('mark_all_notifications_read', {
  account: string
});

const mark_all_notifications_seen = new Serializer('mark_all_notifications_seen', {
  account: string
});

const update_profile_settings = new Serializer('update_profile_settings', {
  enable_email_unseen_notifications: bool,
});

operation.st_operations = [
  register,
  update_profile,
  follow,
  unfollow,
  upload_media,
  mark_post_deleted,
  add_to_blacklist_admin,
  remove_from_blacklist_admin,
  add_category_admin,
  remove_category_admin,
  update_category_admin,
  set_account_trusted_admin,
  upsert_draft,
  remove_draft,
  mark_notification_read,
  mark_all_notifications_read,
  mark_all_notifications_seen,
  update_profile_settings
];

const transaction = new Serializer('transaction', {
  ref_block_num: uint16,
  ref_block_prefix: uint32,
  expiration: time_point_sec,
  operations: array(operation),
  extensions: set(future_extensions)
});

const encrypted_memo = new Serializer('encrypted_memo', {
  from: public_key,
  to: public_key,
  nonce: uint64,
  check: uint32,
  encrypted: string_binary
});
