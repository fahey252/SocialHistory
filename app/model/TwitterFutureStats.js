Ext.define('SocialHistory.model.TwitterFutureStats', {
  extend: 'Ext.data.Model',
  
  config: {
    fields: [{
      name: 'tweetCount',
      type: 'integer'
    }, {
      name: 'followerCount',
      type: 'integer'
    }, {
      name: 'favouriteCount',
      type: 'integer'
    }]
  }
});