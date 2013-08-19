define(['app','controllers/main'] , function (main) {
    return main.config(['$routeProvider' , function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    }]);

});