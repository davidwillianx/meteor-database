Template.home.helpers({
  postList: function(){
      return Posts.find({},{sort:{timeCreated: -1}});
  }
});

Template.home.events({
    'click button.lazyload': function(e,template){
        var currentLimit = Session.get('lazyloadLimit');
        Session.set('lazyloadLimit', currentLimit+2);
    }
});
