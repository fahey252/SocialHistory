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
        xtype: 'container',
        id: 'currentTwitterStatsContainer',
        items: [ {
          xtype: 'twitterform'
        }, {
          xtype: 'twittercurrentstats'
        }, {
          // to be shown in controller on successfully getting twitter user
          xtype: 'choosefutureyear',
          hidden: true
        } ]
      }, {
        xtype: 'container',
        items: [ {
          xtype: 'button',
          text: 'Back',
          iconCls: 'home',
          ui: 'back',
          handler: function() {
            console.log("Go back to the home screen.");
            var socialCarousel = Ext.getCmp('socialCarousel');
            socialCarousel.previous();
          }
        }, {
          xtype: 'twitterfuturestats'
        }, {
          // to be shown in controller on successfully getting twitter user
          xtype: 'choosefutureyear',
          promptText: 'Choose another future year',
          hidden: true
        } ]
      } ]
    }, {
      xtype: 'about'
    } ]
  }
});
