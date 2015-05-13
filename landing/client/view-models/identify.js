Template.Identify.hooks({
  created: function() {
    if (Diety.userExists()) {
      this.user = Diety.user();
    } else { // creates the user for the first time
      this.user = Meteor.users.insert({});
    }
  },
  rendered: function() {
    $('.state-identify .username-field').focus();
  }
});

Template.Identify.helpers({
  user: function() {
    return Diety.user();
  }
})

Template.Identify.events({
  'keyup .state-identify .username-field': function(e, t) {
    console.log();
    Meteor.users.update({_id: Diety.userId() }, { $set: { username: $(e.currentTarget).val() } });
  }
});
