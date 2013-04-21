Ext.define('SocialHistory.view.TwitterFutureStats', {
  extend: 'Ext.Panel',
  xtype: 'twitterfuturestats',
  requires: [],
  model: 'SocialData.model.TwitterUser',    //TODO: make a future stats model
  id: 'twitterfuturestats',
  title: 'Twitter Future Stats',
  instructions: 'Displays a person\'s current social data on Twitter',
  
  config: {
    tpl: [ '<h2>Your Future Twitter Stats:</h2> ',
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
      html: "Your Future Twitter Stats."
    }, {
      xtype: 'panel'
    } ]
  }
});
