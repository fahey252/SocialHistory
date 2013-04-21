Ext.define('SocialHistory.view.TwitterStats', {
  extend: 'Ext.Panel',
  xtype: 'twitterstats',
  requires: [],
  model: 'SocialData.model.TwitterUser',
  
  config: {
    centered: true,
    tpl: [ '<h2>Your Twitter Stats:</h2> ',
            '<ul>',
              '<li><img src="{picURL}"/></li>',
              '<li>Name: {name}</li>',
              '<li>Handle: {handle}</li>',
              '<li>Follower Count: {followerCount}</li>',
              '<li>Friend Count: {friendCount}</li>',
              '<li>Created At: {createdAt}</li>',
              '<li>Favourites Count: {favouritesCount}</li>',
              '<li>Location: {location}</li>',
              '<li>Tweets: {tweets}</li>',
          '</ul>' ],
    items: [ {
      xtype: 'panel'
    } ]
  },
  initialize: function() {
    this.callParent(arguments);

    this.element.on('tap', this.onTap, this);
  },
  onTap: function() {
    var twitterData = this.getRecord().data;
    Ext.Msg.alert(twitterData.name, "Thank you for viewing your Twitter social data.");
    this.destroy();   //free up memory and remove from the DOM
  }
});
