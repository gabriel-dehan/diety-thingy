FlowRouter.route('/', {
  name: 'root',
  subscriptions: function(params) {
    //this.register('myPost', Meteor.subscribe('blogPost', params.postId));
  },
  action: function(params) {
    console.log('still here');
    FlowLayout.render('LayoutApplication', { yield: "Landing" });
  }
});
