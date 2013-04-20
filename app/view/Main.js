Ext.define('SocialHistory.view.Main', {
	extend: 'Ext.tab.Panel',
	xtype: 'main',
	requires: [ 'Ext.TitleBar', 'Ext.Ajax' ],
	config: {
		fullscreen: true,
		tabBarPosition: 'bottom',

		items: [ {
			title: 'Twitter Stats',
			iconCls: 'user',
			xtype: 'panel',
			layout: 'vbox',

			items: [ {
				xtype: 'fieldset',
				title: 'Enter your Twitter handle',
				instructions: 'Reaches out to the Twitter API to get your social data',
				items: [ {
					xtype: 'textfield',
					label: 'Handle'
				} ]
			}, {
			  id: 'getTwitterData',
				xtype: 'button',
				text: 'Get My Twitter Stat\'s',
				ui: 'confirm',
				handler: function() {
				  //button handler is bounded in controller/Twitter.js
				}
			} ]
		},{
		 title: 'About',
		 iconCls: 'user',
		 xtype: 'panel',
		 layout: 'vbox',
		 html: "This app was created by Christopher Fahey",
		 items: [{
		   
		 }]
		}]
	}
});
