Ext.define('SocialHistory.profile.Tablet', {
    extend: 'Ext.app.Profile',

    config: {
        views: [],
        controllers: [],
        models: []
    },

    isActive: function() {
        return Ext.os.is.Tablet;
    }
});