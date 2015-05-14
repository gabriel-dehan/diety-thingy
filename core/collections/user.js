// As there is only one user on the app
Diety.user = (function() { return Meteor.users.findOne(); });
Diety.userExists = (function() { return !_.isUndefined(Meteor.users.findOne()); });
Diety.userId = (function() { if (Diety.userExists()) { return Meteor.users.findOne()._id; } });
Diety.updateUser = (function(selector) { return Meteor.users.update({ _id: Diety.userId() }, selector); });

UserProfileSchema = new SimpleSchema({
  weight: { type: Number, optional: true },
  height: { type: Number, optional: true }
});

UserSchema = new SimpleSchema({
  username: { type: String, max: 25, defaultValue: '' },
  profile:  { type: UserProfileSchema, defaultValue: {} },
  services: { type: Object, optional: true, blackbox: true },
  bootstrap_state: { type: String, defaultValue: 'Identify' },
  created_at: { type: Date, optional: true },
  updated_at: { type: Date, optional: true },
  last_request_at: { type: Date, optional: true }
});

Meteor.users.attachSchema(UserSchema);
Meteor.users.attachBehaviour('timestampable', {
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  createdBy: false,
  updatedBy: false
});

// Only create an user if we have none
Meteor.users.before.insert(function() {
  return !Diety.userExists();
});
