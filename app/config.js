require.config({
  baseUrl: 'scripts',
  paths: {
    "components": "../bower_components",
    "angular": "../bower_components/angular/angular",
    "angular-resource": "../bower_components/angular-resource/angular-resource",
    "angular-mocks": "../bower_components/angular-mocks/angular-mocks",
  },
  shim: {
      'angular' : {'exports' : 'angular'},
      'angular-resource': { deps:['angular']},
  }
});

require(['angular', 'routes/mainRoutes'] , function (angular, mainRoutes) {
    angular.bootstrap(document , ['website3xApp']);
});





