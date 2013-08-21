require.config({
  baseUrl: 'scripts',
  paths: {
    "components": "../bower_components",
    "angular": "../bower_components/angular/angular",
    "angularResource": "../bower_components/angular-resource/angular-resource",
    "angularMocks": "../bower_components/angular-mocks/angular-mocks"
  },
  shim: {
      'angular' : {exports : 'angular'},
      'angularResource': { deps:['angular'], exports:'angularResource'},
      'angularMocks': { deps:['angular'], exports: 'angularMocks'}
  }
});

require(['app', 'angular', 'routes/mainRoutes', 'services/mobliConfig'] , function (app, angular, mainRoutes) {
    app.run(function(mobliConfig){
        mobliConfig.load();
    });
    angular.bootstrap(document , ['website3xApp']);
});





