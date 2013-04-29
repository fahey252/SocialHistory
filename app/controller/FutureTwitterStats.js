Ext.define('SocialHistory.controller.FutureTwitterStats', {
  extend: 'Ext.app.Controller',
  requires: ['SocialHistory.model.TwitterFutureStats'],
  config: {
    refs: {
      futureStatsContainer: '#twitterfuturestats',
      socialCarousel: '#socialCarousel',
      yearButton: 'choosefutureyear #calculateFutureYear'  //xtype itemId
    },
    control: {
      yearButton: {
        tap: 'calculateFutureStatsBasedOnYear'
      }
    },
    routes: {
      'twitter/*/:year': {    //TODO: not working
        action: 'calculateFutureStatsBasedOnYear',
        conditions: {
          ':year': '^\d{4}$'  //must be 4 digits
        }
      }
    }
  },
  
  calculateFutureStatsBasedOnYear: function (event, data) {
    console.log("Calculate future Twitter Stats based in the year " + event.getParent().getComponent('year').getValue());
    
    var twitterUser =  Ext.getCmp('twittercurrentstats').getRecord().getData(),
      inputFutureYear = event.getParent().getComponent('year').getValue(),
      todaysDateInFutureYear = new Date().setFullYear(inputFutureYear),
      today = new Date(),
      millisecondsInTheFuture = todaysDateInFutureYear - today,
      twitterCreatationDate = new Date(twitterUser.createdAt),
      numberOfMillisecondsHavingTwitter = today - twitterCreatationDate,
      milliscondFromCreateDateToFutureDate = numberOfMillisecondsHavingTwitter + millisecondsInTheFuture;
      tweetsPerMillisecond = twitterUser.tweetCount / numberOfMillisecondsHavingTwitter,
      followersPerMillisecond = twitterUser.followerCount / numberOfMillisecondsHavingTwitter,
      favouritesPerMillisecond = twitterUser.favouriteCount / numberOfMillisecondsHavingTwitter,
      projectedAmountOfTweets = (tweetsPerMillisecond * milliscondFromCreateDateToFutureDate),
      projectedAmountOfFollowers = (followersPerMillisecond * milliscondFromCreateDateToFutureDate),
      projectedAmountOfFavourites = (favouritesPerMillisecond * milliscondFromCreateDateToFutureDate);
    
    var futureStats = Ext.create('SocialHistory.model.TwitterFutureStats', {
      tweetCount: projectedAmountOfTweets,
      followerCount: projectedAmountOfFollowers,
      favouriteCount: projectedAmountOfFavourites
    });
    
    this.setFutureStatsInView(futureStats, inputFutureYear);
    
  },
  setFutureStatsInView: function(futureStats, year) {
    
    var futureView = this.getFutureStatsContainer(),
      inTheYear = futureView.getItems().get('inTheYear'),
      viewFields = futureView.getItems().get('statsContainer').getItems(),
      numberOfTweetsField = viewFields.get('numberOfTweets'),
      numberOfFollowersField = viewFields.get('numberOfFollowers'),
      numberOfFavouritesField = viewFields.get('numberOfFavourites');
    
    //set the calculated values
    inTheYear.setHtml("In the year " + year + " you'll have...");
    numberOfTweetsField.setHtml(futureStats.get('tweetCount'));
    numberOfFollowersField.setHtml(futureStats.get('followerCount'));
    numberOfFavouritesField.setHtml(futureStats.get('favouriteCount'));
    
    //take the user to the carousel item that has their stats displayed
    this.getSocialCarousel().next();    //TODO: may not be next if already on future stat view
    
  }
});