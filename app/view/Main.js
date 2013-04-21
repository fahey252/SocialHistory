Ext.define('SocialHistory.view.Main', {
  extend: 'Ext.tab.Panel',
  xtype: 'main',
  requires: [ 'Ext.TitleBar', 'SocialHistory.view.TwitterForm' ],
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
        xtype: 'twitterform'
      }, {
        xtype: 'panel',
        html: 'second screen'
      } ]
    }, {
      title: 'About',
      iconCls: 'user',
      xtype: 'panel',
      layout: 'vbox',
      items: [ {
        xtype: 'panel',
        html: "This app was created by Christopher Fahey",
        centered: true
      } ]
    } ]
  }
});
