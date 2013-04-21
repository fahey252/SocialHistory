Ext.define('SocialHistory.view.About', {
  extend: 'Ext.Panel',
  xtype: 'about',
  requires: [],
  id: 'aboutContainer',
  title: 'About',
  instructions: 'Displays information about the app and its author.',

  config: {
    iconCls: 'user',    //incase used in a tab panel
    title: 'About',
    
    items: [ {
      xtype: 'panel',
      html: "This app was created by Christopher Fahey"
    } ]
  }
});