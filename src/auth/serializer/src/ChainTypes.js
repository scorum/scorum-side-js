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
  upload_media: 4
};

ChainTypes.proposal_operations = {};

//types.hpp
ChainTypes.object_type = {
  null: 0,
  base: 1
};
