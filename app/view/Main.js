Ext.define('SocialHistory.view.Main', {
  extend: 'Ext.tab.Panel',
  xtype: 'main',
  requires: [ 'Ext.TitleBar', 'Ext.form.FieldSet' ],
  config: {
    fullscreen: false,
    tabBarPosition: 'bottom',

    items: [ {
      id: 'SocialHistoryContainer',
      title: 'Twitter Stats',
      iconCls: 'user',
      xtype: 'panel',
      layout: 'vbox',

      items: [ {
        id: "twitterContainer",
        xtype: 'fieldset',
        title: 'Enter your Twitter handle',
        instructions: 'Reaches out to the Twitter API to get your social data',
        items: [ {
          xtype: 'textfield',
          id: 'twitterHandle',
          name: 'twitterHandle',
          label: 'Handle',
          placeHolder: 'Enter Twitter Handle'
        }
        ]
      }, {
        id: 'getTwitterData',
        xtype: 'button',
        text: 'Get My Twitter Stat\'s',
        ui: 'confirm',
        handler: function() {
          // button handler is bounded in controller/Twitter.js
        }
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
