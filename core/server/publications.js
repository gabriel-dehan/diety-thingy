Meteor.publish("diety:user", function() {
  return Meteor.users.find({}, {
    limit: 1,
    fields: {
      username: 1,
      profile: 1,
      bootstrap_state: 1,
      created_at: 1,
      updated_at: 1,
      last_request_at: 1
    }
  });
});
