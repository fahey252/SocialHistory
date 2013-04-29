Ext.define('SocialHistory.view.ChooseFutureYear', {
  extend: 'Ext.Panel',
  xtype: 'choosefutureyear',
  requires: ['Ext.Label'],
  title: 'Choose Future Year',
  information: 'Allows a user to chose some year in the future',
  
  config: {
    layout: 'hbox',
    promptText: 'Choose Future Year',
    
    items: [{
      xtype: 'label',
      itemId: 'promptText',
      html: this.promptText
    }, {
      xtype: 'textfield',
      itemId: 'year'
    }, {
      xtype: 'button',
      itemId: 'calculateFutureYear',
      text: 'Go'
    }]
  },
  
  constructor: function() {
    this.callParent(arguments);
    
    this.getComponent('promptText').setHtml(this.config.promptText);
  }
  
});