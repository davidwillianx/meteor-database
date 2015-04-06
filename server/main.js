Meteor.startup(function(){

  if(Posts.find().count() === 0){
      var postsToPersist = [
        {
          title:' First  post',
          slug:'Something new',
          description:' this is a  first post',
          timeCreated:	moment().subtract(5,'days').unix(),
          author:' mine me'
        },
        {
          title:' Second post',
          slug:'Something already done',
          description:' this is a  Second post',
          timeCreated:	moment().subtract(3,'days').unix(),
          author:' myself'
        },
        {
          title:' Tird ',
          slug:'Lets play gears of war judgment',
          description:' this is a bad game ever',
          timeCreated:	moment().subtract(2,'days').unix(),
          author:' envil gate'
        }

      ];

      _.each(postsToPersist,function(post){
          Posts.insert(post);
      });

  }

});
