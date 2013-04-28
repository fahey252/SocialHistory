Ext.define('SocialHistory.view.TwitterFutureStats', {
  extend: 'Ext.Panel',
  xtype: 'twitterfuturestats',
  requires: [],
  model: 'SocialData.model.TwitterUser',
  id: 'twitterfuturestats',
  title: 'Twitter Future Stats',
  instructions: 'Displays a person\'s current social data on Twitter',
  
  config: {

    items: [ {
      xtype: 'panel',
      html: "Your Future Twitter Stats."
    }, {
      xtype: 'panel',
      itemId: 'inTheYear',
      html: ''    //set in the controller
    },{
      xtype: 'panel',
      layout: 'hbox',
      items: [{
        xtype: 'panel',
        html: 'Number of Tweets',
        flex: 1
      }, {
        xtype: 'panel',
        html: 'Number of Followers',
        flex: 1
      }, {
        xtype: 'panel',
        html: 'Number of Favourites',
        flex: 1
      }]
    }, {
      xtype: 'panel',
      itemId: 'statsContainer',
      layout: 'hbox',
      items: [{
        xtype: 'panel',
        itemId: 'numberOfTweets',
        html: '',   //set in the controller
        flex: 1
      }, {
        xtype: 'panel',
        itemId: 'numberOfFollowers',
        html: '',   //set in the controller
        flex: 1
      }, {
        xtype: 'panel',
        itemId: 'numberOfFavourites',
        html: '',   //set in the controller
        flex: 1
      }]
    }]
  }
});
