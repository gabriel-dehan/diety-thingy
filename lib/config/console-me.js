if (Meteor.isServer) {
  ConsoleMe.enabled = true;
} else {
  ConsoleMe.subscribe();
}
