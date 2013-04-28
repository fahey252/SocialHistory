Ext.define('SocialHistory.view.Main', {
  extend: 'Ext.tab.Panel',
  xtype: 'main',
  requires: [ 'Ext.carousel.Carousel', 'SocialHistory.view.TwitterForm', 'SocialHistory.view.TwitterFutureStats', 'SocialHistory.view.About' ],
  config: {
    fullscreen: true,
    tabBarPosition: 'bottom',

    items: [ {
      xtype: 'carousel',
      id: 'socialCarousel',
      title: 'Twitter Stats',
      iconCls: 'user',

      items: [ {
        xtype: 'panel',
        items: [{
          xtype: 'twitterform'
        }, {
          xtype: 'twittercurrentstats'
        }]
      }, {
        xtype: 'twitterfuturestats',
        id: 'twitterFutureStatsContainer'
      } ]
    }, {
      xtype: 'about'
    } ]
  }
});
