Ext.define('SocialHistory.controller.Twitter', {
  extend: 'Ext.app.Controller',
  requires: ['Ext.data.JsonP', 'SocialHistory.model.TwitterUser', 'SocialHistory.view.TwitterCurrentStats'],   //lazy instantiation of library
  id: 'twitterController',
  config: {
    refs: {
      twitterSubmitButton: '#getTwitterData',
      twitterHandle: 'input[name=twitterHandle]',
      currentStatsView: '#twittercurrentstats'
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
  
  getTwitterData: function(handle) {

    var twitterHandle = handle,   //grabs the value from url
        twitterApiUrl = "https://api.twitter.com/1/users/show.json?screen_name=" + twitterHandle,
        twitterConroller = this;

    //TODO: show spinner while making ajax call
    Ext.data.JsonP.request({  //need JsonP, not ajax, for cross domain calls
      url: twitterApiUrl,
      success: function(response) {
        console.log("Successfully retreived " + twitterHandle + "'s data from Twitter");
        
        twitterConroller.showTwitterData(response);
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
      createdAt: new Date(twitterResponse.created_at).toLocaleString(),
      favouriteCount: twitterResponse.favourites_count,
      location: twitterResponse.location,
      tweetCount: twitterResponse.statuses_count,
      picURL: twitterResponse.profile_image_url
    });
    
    var errors = twitterUser.validate();
    console.log('Is twitter user valid?', errors.isValid()); // returns 'false' as there were validation errors
    
    var twitterView = this.getCurrentStatsView();
    twitterView.setRecord(twitterUser);
  }
});