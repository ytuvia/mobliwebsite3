define(['app', 'angular', 'angularResource'], function (app, angular) {
    app.service('mobliResourceLoader', function () {
        var loader = function (options) {
            var config = {
                resources: []
            };
            angular.extend(config, options);

            this.resources = config.resources;

        };

        loader.prototype.getResource = function (key) {
            var resource = thisi.resources[key];
            if(resource){
                return $resource( + "/me",
                    {},
                    {
                        get: {method:'GET'},
                        put: {method:'PUT'}
                    });
            }

        }


        return new loader();
    });
});
