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
      
      //TODO: add submit form on enter key press
      
      items: [ {
        xtype: 'container',
        id: 'currentTwitterStatsContainer',
        scrollable: {
          direction: 'vertical',
          directionLock: true
        },
        items: [ {
          xtype: 'twitterform'
        }, {
          // to be shown in controller on successfully getting twitter user
          xtype: 'choosefutureyear',
          hidden: true
        }, {
          xtype: 'twittercurrentstats'
        } ]
      }, {
        xtype: 'container',
        items: [ {
          xtype: 'button',
          text: 'Back',
          iconCls: 'home',
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
