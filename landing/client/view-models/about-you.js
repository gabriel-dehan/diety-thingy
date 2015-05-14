Template.AboutYou.hooks({
  rendered: function() {
    $('.state-about-you .weight-field').focus();
  }
});

Template.AboutYou.events({
  'keyup .state-about-you input': function(e, t) {
    //Diety.updateUser({ $set: { username: $(e.currentTarget).val() } });
  },
  'keyup .state-about-you .weight-field': function(e, t) {
    var value = $(e.currentTarget).val();

    if (e.which == 13 && value.length > 0) {
      $('.state-about-you .height-field').focus();
      return false;
    } else {
      Diety.updateUser({ $set: { 'profile.weight': parseInt(value) } });
    }
  },
  'keyup .state-about-you .height-field': function(e, t) {
    var value = $(e.currentTarget).val()

    if (e.which == 13 && value.length > 0) {
      Diety.updateUser({ $set: { bootstrap_state: 'Likes' } });
      return false;
    } else {
      Diety.updateUser({ $set: { 'profile.height': parseInt(value) } });
    }
  }
});
