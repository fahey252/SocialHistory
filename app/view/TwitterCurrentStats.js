Ext.define('SocialHistory.view.TwitterCurrentStats', {
  extend: 'Ext.Panel',
  xtype: 'twittercurrentstats',
  requires: ['SocialHistory.view.ChooseFutureYear'],
  model: 'SocialData.model.TwitterUser',
  id: 'twittercurrentstats',
  title: 'Twitter Current Stats',
  instructions: 'Displays a person\'s current social data on Twitter',
  
  config: {
    tpl: [ '<h2>Your Current Twitter Stats:</h2> ',
            '<ul>',
              '<li><img src="{picURL}"/></li>',
              '<li>Name: {name}</li>',
              '<li>Handle: {handle}</li>',
              '<li>Follower Count: {followerCount}</li>',
              '<li>Friend Count: {friendCount}</li>',
              '<li>Created At: {createdAt}</li>',
              '<li>Favourites Count: {favouritesCount}</li>',
              '<li>Location: {location}</li>',
              '<li>Tweets: {tweetCount}</li>',
          '</ul>' ],
    items: [ {
      xtype: 'panel'
    }, {
      xtype: 'panel'
    }, {
      xtype: 'choosefutureyear'
    } ]
  },
  initialize: function() {
    /*
    this.callParent(arguments);

    this.element.on('tap', this.onTap, this);
    */
  },
  onTap: function() {
    /*
    var twitterData = this.getRecord().data;
    Ext.Msg.alert(twitterData.name, "Thank you for viewing your Twitter social data.");
    this.destroy();   //free up memory and remove from the DOM
    */
  }
});
