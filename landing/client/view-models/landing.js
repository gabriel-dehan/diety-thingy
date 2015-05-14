// States = ['Identify', 'AboutYou', 'Done'];

Template.Landing.helpers({
  currentStep: function() {
    var state;

    if (Diety.userExists()) {
      state = Diety.user().bootstrap_state;
    } else {
      state = 'Identify';
    }

    return state;
  }
});
