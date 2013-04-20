Ext.define('SocialHistory.controller.Twitter', {
  extend: 'Ext.app.Controller',
  config: {
    control: {
      getTwitterDataController: {
        tap: 'getTwitterData'
      }
    },
    refs: {
      getTwitterDataController: '#getTwitterData'
    },
  },

  getTwitterData: function() {
    console.log("Getting Data from Twitter");

    // make ajax call to twitters api
    // TODO: get users handle for what they typed in
    // TODO: validate users twitter handle and make sure it exists
    // TODO: need to launch chrome with: open -a Google\ Chrome --args --disable-web-security because of CORS
    var twitterApiUrl = "https://api.twitter.com/1/users/show.json" + 
      "?screen_name=heyfaybaybay&include_entities=true";

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
        
        
      },
      failure: function(conn, response, options, eOpts) {
        Ext.Msg.alert("Failed to retreived your data from Twitter");
        console.log("Failed to retreived your data from Twitter " + response);
      }
    });

  }
});