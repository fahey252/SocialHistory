Ext.define('SocialHistory.view.TwitterForm', {
	extend: 'Ext.form.FieldSet',
	xtype: 'twitterform',
	requires: ['Ext.form.FieldSet'],
	id: "twitterFormContainer",
	title: 'Collects a user\'s Twitter Handle',
  instructions: 'Reaches out to the Twitter API to get your social data',

  config: {
    items: [ {
      xtype: 'textfield',
      id: 'twitterHandle',
      name: 'twitterHandle',
      label: 'Handle',
      placeHolder: 'Enter Twitter Handle'
    }, {
      id: 'getTwitterData',
      xtype: 'button',
      text: 'Get Future Stat\'s',
      ui: 'confirm'
    } ]
  }

});