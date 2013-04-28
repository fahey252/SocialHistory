Ext.define('SocialHistory.view.TwitterFutureStats', {
  extend: 'Ext.Panel',
  xtype: 'twitterfuturestats',
  requires: [],
  model: 'SocialData.model.TwitterUser',    //TODO: make a future stats model
  id: 'twitterfuturestats',
  title: 'Twitter Future Stats',
  instructions: 'Displays a person\'s current social data on Twitter',
  
  config: {

    items: [ {
      xtype: 'panel',
      html: "Your Future Twitter Stats."
    }, {
      xtype: 'panel',
      html: 'In 20 years you will have...'    //TODO: calculate the number of years.
    },{
      xtype: 'panel',
      layout: 'hbox',
      items: [{
        xtype: 'panel',
        html: 'Number of tweets',
        flex: 1
      }, {
        xtype: 'panel',
        html: 'Number of followers',
        flex: 1
      }, {
        xtype: 'panel',
        html: 'Number of favourites',
        flex: 1
      }]
    } ]
  }
});
