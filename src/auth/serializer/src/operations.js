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

const dummy = new Serializer('dummy', {
  something: string
});

operation.st_operations = [
  register,
  update_profile,
  follow,
  unfollow,
  upload_media
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
