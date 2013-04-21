Ext.define('SocialHistory.view.Main', {
  extend: 'Ext.tab.Panel',
  xtype: 'main',
  requires: [ 'Ext.carousel.Carousel', 'SocialHistory.view.TwitterForm', 'SocialHistory.view.TwitterFutureStats', 'SocialHistory.view.About' ],
  config: {
    fullscreen: true,
    tabBarPosition: 'bottom',

    items: [ {
      id: 'SocialHistoryContainer',
      title: 'Twitter Stats',
      iconCls: 'user',
      xtype: 'carousel',
      layout: 'vbox',

      items: [ {
        xtype: 'panel',
        items: [{
          xtype: 'twitterform'
        }, {
          xtype: 'twittercurrentstats'
        }]
      }, {
        xtype: 'twitterfuturestats'
      } ]
    }, {
      xtype: 'about'
    } ]
  }
});
