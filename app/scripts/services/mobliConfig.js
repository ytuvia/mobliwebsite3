'use strict';

angular.module('website3xApp')
  .service('mobliConfig', function mobliConfig(mobliConstants, $log, $http) {

        var configObj = {
            configUrl: mobliConstants.CONFIG_URL,
            apiUrl: mobliConstants.API_URL,
            plugins: mobliConstants.PLUGINS
        };

          $http.get(configObj.configUrl).then(
            function(res){
                configObj.extend(configObj, res.data);
            },
            function(res){
                $log.error('failed to get application configuration from data-source:' + configObj.configUrl +' with result' + res);
            }
        );

        this.getConfig = function(){
            return configObj;
        };
  });
