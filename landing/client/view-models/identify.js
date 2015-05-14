Template.Identify.hooks({
  created: function() {
    if (Diety.userExists()) {
      this.user = Diety.user();
    } else { // creates the user for the first time
      this.user = Meteor.users.insert({});
    }
  },
  rendered: function() {
    $('.state-identify .username-field').autosizeInput().focus();
  }
});

Template.Identify.events({
  'keyup .state-identify .username-field': function(e, t) {
    Diety.updateUser({ $set: { username: $(e.currentTarget).val() } });
  },
  'keypress .state-identify .username-field': function(e, t) {
    if (e.which == 13 && $(e.currenTarget).val().length > 0) {
      Diety.updateUser({ $set: { bootstrap_state: 'AboutYou' } });
      return false;
    }
  }
});
