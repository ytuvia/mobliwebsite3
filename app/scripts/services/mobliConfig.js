define(['app','services/mobliConstants'], function(app){
    app.service('mobliConfig',['mobliConstants', '$log','$http', '$q', function(mobliConstants, $log, $http, $q){
        var configObj = {
            configUrl: mobliConstants.CONFIG_URL,
            apiUrl: mobliConstants.API_URL
        };

        var defer = $q.defer();

        this.load = function(){
            $http.get(configObj.configUrl).then(
                function(res){
                    angular.extend(configObj, res.data);
                    defer.resolve(configObj);
                },
                function(res){
                    $log.warn('failed to get application configuration from data-source. using fallback. datasource:' + configObj.configUrl +' with result' + res);
                    defer.resolve(configObj);
                }
            );
        };

        this.getPromise = function(){
            return defer.promise;
        };

        this.config = configObj;

        return this;
    }])
});