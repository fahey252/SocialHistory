Ext.define('SocialHistory.model.TwitterUser', {
  extend: 'Ext.data.Model',
  config: {
    fields: [ {
      name: 'name',
      type: 'string'
    }, {
      name: 'handle',
      type: 'string'
    }, {
      name: 'followerCount',
      type: 'integer'
    }, {
      name: 'friendCount',
      type: 'string'
    }, {
      name: 'createdAt',
      type: 'string'
    }, {
      name: 'favouritesCount',
      type: 'string'
    }, {
      name: 'location',
      type: 'string'
    }, {
      name: 'tweets',
      type: 'string'
    }, {
      name: 'picURL',
      type: 'string'
    } ],
    
    /*
     * Names must be present and be at least 3 characters,
     * Follower count must be digits
     * Users cannot be from Michigan
     */
    validations: [ {
      type: 'presence',
      field: 'name'
    }, {
      type: 'length',
      field: 'name',
      min: 3
    }, {
      type: 'format',
      field: 'followerCount',
      matcher: /\d+/
    }, /*  inclusions has to be the complete name for an item in the list{
      type: 'inclusion',
      field: 'name',
      list: [ 'Fahey' ]
    },*/ {
      type: 'exclusion',
      field: 'location',
      list: [ 'Michigan' ]
    } ]
  }
});