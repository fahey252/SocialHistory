Ext.define('SocialHistory.controller.Twitter', {
  extend: 'Ext.app.Controller',
  requires: ['Ext.Ajax', 'SocialHistory.model.TwitterUser', 'SocialHistory.view.TwitterStats'],   //lazy instantiation of library
  config: {
    refs: {
      socialHistoryContainer: '#SocialHistoryContainer',
      twitterSubmitButton: '#getTwitterData',
      twitterHandle: "input[name=twitterHandle]"
    },
    control: {
      twitterSubmitButton: {
        tap: 'getTwitterDataFromInputText'
      }
    },
    routes: {   //sets up mapping between urls and controller actions... when go to url, action is called
      'twitter/:handle': {
        action: 'getTwitterDataHandleInUrl',          //example URL:  /#twitter/heyfaybaybay
        conditions: {
          ':handle': "[0-9a-zA-Z_]+"
        }
      }
    }
  },

  /*
   * Gets twitter data from any text input with a name=twitterHandle
   */
  getTwitterDataFromInputText: function() {
    console.log("Getting Data from Twitter based on twitter handle in text box");

    // TODO: validate users twitter handle and make sure it exists
    var twitterHandle = this.getTwitterHandle()._value;   //grabs the value in the twitter handle field
   
    this.getTwitterData(twitterHandle);
  },
  
  /*
   *   Gets a users data based on url such as:
   *   http://<domain>/#twitter/handle
   */
  getTwitterDataHandleInUrl: function(handle) {
    console.log("Getting Data from Twitter via url");
    
    this.getTwitterData(handle);
  },
  
  /*
   * Helper that gets a users twitter data based on a passed in twitter handle
   */
  getTwitterData: function(handle) {
    
    // TODO: validate users twitter handle and make sure it exists
    var twitterHandle = handle,   //grabs the value from url
        twitterApiUrl = "https://api.twitter.com/1/users/show.json?screen_name=" + twitterHandle,
        twitterConroller = this;

    //TODO: errors out when making cross server scripting calls with out insecure browsing
    Ext.Ajax.request({
      url: twitterApiUrl,
      cors: true,   //needed to cross domain service calls
      success: function(response) {
        console.log("Successfully retreived your data from Twitter");
        
        var twitterResponse = JSON.parse(response.responseText);
        
        twitterConroller.showTwitterData(twitterResponse);
      },
      failure: function(conn, response, options, eOpts) {
        Ext.Msg.alert("Failed to retreived your data from Twitter");
        console.log("Failed to retreived your data from Twitter " + response);
      }
    });
  },
  showTwitterData: function (twitterResponse) {

    var twitterUser = Ext.create('SocialHistory.model.TwitterUser', {
      name: twitterResponse.name,
      handle: twitterResponse.screen_name,
      followerCount: twitterResponse.followers_count,
      friendCount: twitterResponse.friends_count,
      createdAt: twitterResponse.created_at,
      favouritesCount: twitterResponse.favourites_count,
      location: twitterResponse.location,
      tweets: twitterResponse.statuses_count,
      picURL: twitterResponse.profile_image_url
    });
    
    var errors = twitterUser.validate();
    console.log('Is twitter user valid?', errors.isValid()); // returns 'false' as there were validation errors
    
    var twitterView = Ext.create('SocialHistory.view.TwitterStats', {});
    twitterView.setRecord(twitterUser);
    Ext.Viewport.add(twitterView);
  }
});