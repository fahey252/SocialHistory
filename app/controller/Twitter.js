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
        twitterApiUrl = "https://api.twitter.com/1/users/show.json" + 
          "?screen_name=" + twitterHandle;

    Ext.Ajax.request({
      url: twitterApiUrl,
      cors: true,
      success: function(response) {
        console.log("Successfully retreived your data from Twitter");
        
        var twitterResponse = JSON.parse(response.responseText);
        
        console.log("Name: " + twitterResponse.name);
        console.log("Screen Name: " + twitterResponse.screen_name);
        console.log("Followers Count: " + twitterResponse.followers_count);
        console.log("Friends Count: " + twitterResponse.friends_count);
        console.log("Created At: " + twitterResponse.created_at);
        console.log("Favourites Count: " + twitterResponse.favourites_count);
        console.log("Location: " + twitterResponse.location);
        console.log("Tweets: " + twitterResponse.statuses_count);
        console.log("Profile Pic URL: " + twitterResponse.profile_image_url);
    
        
        
        /*
        Ext.Viewport.add({
          xtype: 'datepicker'
        });
        */
      },
      failure: function(conn, response, options, eOpts) {
        Ext.Msg.alert("Failed to retreived your data from Twitter");
        console.log("Failed to retreived your data from Twitter " + response);
      }
    });

  }
});