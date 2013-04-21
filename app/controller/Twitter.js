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
        tap: 'getTwitterDataFromInputText'
      }
    },
    routes: {   //sets up mapping between urls and controller actions... when go to url, action is called
      'twitter/:handle': 'getTwitterDataHandleInUrl'          //example URL:  /#twitter/heyfaybaybay
    }
  },

  /*
   * Gets twitter data from any text input with a name=twitterHandle
   */
  getTwitterDataFromInputText: function() {
    console.log("Getting Data from Twitter based on twitter handle in text box");

    // TODO: validate users twitter handle and make sure it exists
    var twitterHandle = this.getTwitterHandle()._value;   //grabs the value in the twitter handle field
   
    getTwitterData(twitterHandle);
  },
  
  /*
   *   Gets a users data based on url such as:
   *   http://<domain>/#twitter/handle
   */
  getTwitterDataHandleInUrl: function(handle) {
    console.log("Getting Data from Twitter via url");
    
    getTwitterData(handle);
  },
  
  /*
   * Helper that gets a users twitter data based on a passed in twitter handle
   */
  getTwitterData: function(handle) {
    
    // TODO: validate users twitter handle and make sure it exists
    var twitterHandle = handle,   //grabs the value from url
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
            '<li><img src="' + picURL + '"/></li>' +
            '<li>Name: ' + name + '</li>' +
            '<li>Handle: ' + handle + '</li>' +
            '<li>Follower Count: ' + followerCount + '</li>' +
            '<li>Friend Count: ' + friendCount + '</li>' +
            '<li>Created At: ' + createdAt + '</li>' +
            '<li>Favourites Count: ' + favouritesCount + '</li>' +
            '<li>Location: ' + location + '</li>' +
            '<li>Tweets: ' + tweets + '</li>' +
          '</ul>'
        });
        
        Ext.Viewport.add(data);
        
      },
      failure: function(conn, response, options, eOpts) {
        Ext.Msg.alert("Failed to retreived your data from Twitter");
        console.log("Failed to retreived your data from Twitter " + response);
      }
  }
  
});