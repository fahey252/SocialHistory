Ext.define('SocialHistory.controller.FutureTwitterStats', {
  extend: 'Ext.app.Controller',
  requires: ['SocialHistory.view.ChooseFutureYear', 'SocialHistory.model.TwitterFutureStats'],
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
      futureYear = event.getParent().getComponent('year').getValue(),
      today = new Date(),
      numberOfYears = futureYear - today.getFullYear(),
      twitterCreatationDate = new Date(twitterUser.createdAt),
      millisecondsInADay = 60*60*24*1000,
      daysInAYear = 365.25,
      numberOfDaysHavingTwitter = (today - twitterCreatationDate)/millisecondsInADay,
      tweetsPerDay = twitterUser.tweetCount / numberOfDaysHavingTwitter,
      followersPerDay = twitterUser.followerCount / numberOfDaysHavingTwitter,
      favouritesPerDay = twitterUser.favouriteCount / numberOfDaysHavingTwitter,
      projectedAmountOfTweets = tweetsPerDay * (daysInAYear * numberOfYears),
      projectedAmountOfFollowers = followersPerDay * (daysInAYear * numberOfYears),
      projectedAmountOfFavourites = favouritesPerDay * (daysInAYear * numberOfYears);
    
    var futureStats = Ext.create('SocialHistory.model.TwitterFutureStats', {
      tweetCount: projectedAmountOfTweets,
      followerCount: projectedAmountOfFollowers,
      favouriteCount: projectedAmountOfFavourites
    });
    
    this.setFutureStatsInView(futureStats, futureYear);
    
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