Ext.define('SocialHistory.view.ChooseFutureYear', {
  extend: 'Ext.Container',
  xtype: 'choosefutureyear',
  requires: [],
  title: 'Choose Future Year',
  information: 'Allows a user to chose some year in the future',
  
  config: {
    layout: 'hbox',
    promptText: 'Choose Future Year',
    
    items: [{
      xtype: 'textfield',
      itemId: 'year',
      label: 'Year',
      placeHolder: this.promptText,
      maxLength: 4,
      flex: 1
    }, {
      xtype: 'button',
      itemId: 'calculateFutureYear',
      ui: 'action-round',
      text: 'Go'
    }]
  },
  
  constructor: function() {
    this.callParent(arguments);
    
    this.getComponent('year').setPlaceHolder(this.config.promptText);
  }
  
});