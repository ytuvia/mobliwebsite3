define(['app','controllers/main'] , function (app) {
    return app.config(['$routeProvider' , function ($routeProvider) {
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