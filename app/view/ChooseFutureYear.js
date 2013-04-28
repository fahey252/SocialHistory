Ext.define('SocialHistory.view.ChooseFutureYear', {
  extend: 'Ext.Panel',
  xtype: 'choosefutureyear',
  requires: [],
  
  id: 'choosefutureyear',
  title: 'Choose Future Year',
  information: 'Allows a user to chose some year in the future',
  
  config: {
    layout: 'hbox',
    
    items: [{
      xtype: 'label',
      text: 'Chose Future Year:'
    }, {
      xtype: 'textfield' 
    }, {
      xtype: 'button',
      text: 'Go'
    }]
  }
  
});