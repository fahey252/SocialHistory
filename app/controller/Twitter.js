Ext.define('SocialHistory.controller.Twitter', {
  extend: 'Ext.app.Controller',
  requires: [ 'Ext.data.JsonP', 'SocialHistory.model.TwitterUser', 'SocialHistory.view.TwitterCurrentStats' ],
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
    routes: { // sets up mapping between urls and controller actions... 
      'twitter/:handle': {
        // example URL: /#twitter/heyfaybaybay
        action: 'getTwitterDataHandleInUrl',
        conditions: {
          ':handle': '[0-9a-zA-Z_]+'
        }
      },
      'twitter/:handle/:year': {
        // example URL: /#twitter/heyfaybaybay/2020
        action: 'getTwitterDataHandleWithYearInUrl',
        conditions: {
          ':handle': '[0-9a-zA-Z_]+',
          ':year': '\\d{4}'
        }
      }
    }
  },

  getTwitterDataFromInputText: function() {
    console.log("Getting Data from Twitter based on twitter handle in text box");

    var twitterHandle = this.getTwitterHandle()._value;

    this.getTwitterData(twitterHandle);
  },
  getTwitterDataHandleInUrl: function(handle) {
    console.log("Getting Data from Twitter via url");

    this.getTwitterData(handle);
  },
  getTwitterDataHandleWithYearInUrl: function(handle, year) {
    console.log("Getting Data from Twitter via url with year");
    
    this.getTwitterData(handle);
  },

  getTwitterData: function(handle) {
    console.log("Getting Data from Twitter for: " + handle);
    
    var twitterHandle = handle, // grabs the value from url
    twitterApiUrl = "https://api.twitter.com/1/users/show.json?screen_name=" + twitterHandle, twitterConroller = this;

    // TODO: show spinner while making ajax call
    Ext.data.JsonP.request({ // need JsonP, not ajax, for cross domain calls
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
  showTwitterData: function(twitterResponse) {

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
    }), errors = twitterUser.validate(), isTwitterHandleValid = errors.isValid(), chooseFutureYearContainers = Ext.ComponentQuery.query('choosefutureyear'), // get
    // all
    // instances
    twitterStatsView = this.getCurrentStatsView();

    console.log('Is twitter user valid?', isTwitterHandleValid);

    if (isTwitterHandleValid) {
      twitterStatsView.setRecord(twitterUser);
      chooseFutureYearContainers.forEach(function(year) {
        year.show();
      });
    } else {
      twitterStatsView.setRecord({}); // clear
      chooseFutureYearContainers.forEach(function(year) {
        year.hide();
      });
    }
  }
});