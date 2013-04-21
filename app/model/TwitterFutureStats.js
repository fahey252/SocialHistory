Ext.define('SocialHistory.model.TwitterFutureStats', {
  extend: 'Ext.data.Model',
  
  config: {
    fields: [{
      name: 'tweets',
      type: 'integer'
    }, {
      name: 'followers',
      type: 'integer'
    }, {
      name: 'favourites',
      type: 'integer'
    }]
  }
});