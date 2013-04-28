Ext.define('SocialHistory.view.ChooseFutureYear', {
  extend: 'Ext.Panel',
  xtype: 'choosefutureyear',
  requires: ['Ext.Label'],
  id: 'choosefutureyear',
  title: 'Choose Future Year',
  information: 'Allows a user to chose some year in the future',
  
  config: {
    layout: 'hbox',
    
    items: [{
      xtype: 'label',
      html: 'Chose Future Year:'
    }, {
      xtype: 'textfield',
      name: 'year'
    }, {
      xtype: 'button',
      id: 'futureYearButton',
      text: 'Go'
    }]
  }
});