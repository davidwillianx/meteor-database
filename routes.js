Router.configure({
    layoutTemplate: 'layout',
    notFoundTemplate: 'notFound',
    loadingTemplate: 'loading',
    onAfterAction: function(){
          var post = Posts.findOne({ slug : this.params.slug});
          var title = ' Meteor blog  ';

          if(_.isObject(post) && !_.isArray(post))
               title += post.title
          else title += this.route.getName();

          document.title = title;
    }
});
  if(Meteor.isClient)
    Session.setDefault('lazyloadLimit', 2);

Router.map(function(){
  this.route('Home',{
    path: '/',
    template: 'home',
    subscriptions: function(){
      return Meteor.subscribe('lazyload-posts' , Session.get('lazyloadLimit'));
    }
  });

  this.route('About',{
    path:'/about',
    template: 'about'
  });

  this.route('Post',{
      path: '/posts/:slug',
      template: 'poxt',

      waitOn:  function(){
        return Meteor.subscribe('single-post', this.params.slug);
      },
      data: function(){
          return Posts.findOne({slug: this.params.slug});
      }

  });

});
