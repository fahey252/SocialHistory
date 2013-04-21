Ext.define('SocialHistory.view.TwitterStats', {
  extend: 'Ext.Panel',
  xtype: 'twitterstats',
  id: 'myTwitterStats',
  cls: 'twitterStats',
  requires: [],
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
      xtype: 'panel',
      styleHtmlContent: true
    } ]
  },
  initialize: function() {
    this.callParent(arguments);

    this.element.on('tap', this.onTap, this);
  },

  // this function is called whenever you tap on the image
  onTap: function() {
    Ext.Msg.alert(this.getName(), this.getTwitterHandle());
  }
});

