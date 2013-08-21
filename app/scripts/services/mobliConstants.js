define(['app'], function(app){
    return app.constant('mobliConstants',
        {
            CONFIG_URL: 'http://dev.website3.mobli.com.s3.amazonaws.com/config.json',
            API_URL: 'http://stage.api.mobli.com/3',
            PLUGINS:
            {
                mobli:{
                    clientId: '102567273',
                    clientSecret: '0268aa96d70da4133fba2b65d065eea7'
                }
            }
        });
});