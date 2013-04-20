Ext.define('SocialHistory.view.Main', {
	extend: 'Ext.tab.Panel',
	xtype: 'main',
	requires: [ 'Ext.TitleBar', 'Ext.Video' ],
	config: {
		fullscreen: true,
		tabBarPosition: 'bottom',

		items: [ {
			title: 'Twitter Stats',
			iconCls: 'user',
			xtype: 'formpanel',
			url: 'contact.php',
			layout: 'vbox',

			items: [ {
				xtype: 'fieldset',
				title: 'Contact Us',
				instructions: '(email address is optional)',
				items: [ {
					xtype: 'textfield',
					label: 'Name'
				}, {
					xtype: 'emailfield',
					label: 'Email'
				}, {
					xtype: 'textareafield',
					label: 'Message'
				} ]
			}, {
				xtype: 'button',
				text: 'Send',
				ui: 'confirm',
				handler: function() {
					this.up('formpanel').submit();
				}
			} ]
		} ]
	}
});
