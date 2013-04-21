Ext.define('SocialHistory.controller.Twitter', {
  extend: 'Ext.app.Controller',
  requires: ['Ext.Ajax'],   //lazy instantiation of library
  config: {
    refs: {
      twitterSubmitButton: '#getTwitterData',
      twitterHandle: "input[name=twitterHandle]"
    },
    control: {
      twitterSubmitButton: {
        tap: 'getTwitterData'
      }
    },
  },

  getTwitterData: function(view, index, target, record, event) {
    console.log("Getting Data from Twitter");

    // TODO: validate users twitter handle and make sure it exists
    var twitterHandle = this.getTwitterHandle()._value,   //grabs the value in the twitter handle field
        twitterApiUrl = "https://api.twitter.com/1/users/show.json?screen_name=" + twitterHandle;

    //TODO: errors out when making cross server scripting calls with out insecure browsing
    Ext.Ajax.request({
      url: twitterApiUrl,
      cors: true,   //needed to cross domain service calls
      success: function(response) {
        console.log("Successfully retreived your data from Twitter");
        
        var twitterResponse = JSON.parse(response.responseText),
          name = twitterResponse.name,
          handle = twitterResponse.screen_name,
          followerCount = twitterResponse.followers_count,
          friendCount = twitterResponse.friends_count,
          createdAt = twitterResponse.created_at,
          favouritesCount = twitterResponse.favourites_count,
          location = twitterResponse.location,
          tweets = twitterResponse.statuses_count,
          picURL = twitterResponse.profile_image_url;
        
        //TODO: break this out into a view
        var data = Ext.create('Ext.Panel', {
          title: "Your twitter stats",
          description: "Based on your data retrieved from twitter",
          centered: true,
          html: '<h2>Your Twitter Stats:</h2> ' +
          '<ul>' + 
            '<li>Name: ' + name + '</li>' +
            '<li>Handle: ' + handle + '</li>' +
            '<li>Follower Count: ' + followerCount + '</li>' +
            '<li>Friend Count: ' + friendCount + '</li>' +
            '<li>Created At: ' + createdAt + '</li>' +
            '<li>Favourites Count: ' + favouritesCount + '</li>' +
            '<li>Location: ' + location + '</li>' +
            '<li>Tweets: ' + tweets + '</li>' +
            '<li><img src="' + picURL + '"/></li>' +
          '</ul>'
        });
        
        Ext.Viewport.add(data);
        
      },
      failure: function(conn, response, options, eOpts) {
        Ext.Msg.alert("Failed to retreived your data from Twitter");
        console.log("Failed to retreived your data from Twitter " + response);
      }
    });
  }
});