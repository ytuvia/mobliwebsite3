require.config({
  baseUrl: 'scripts',
  paths: {
    "components": "../bower_components",
    "angular": "../bower_components/angular/angular",
    "angularResource": "../bower_components/angular-resource/angular-resource"
  },
  shim: {
      'angular' : {exports : 'angular'},
      'angularResource': { deps:['angular'], exports:'angularResource'}
  }
});

require(['app', 'angular', 'config/routes', 'services/mobliConfig'] , function (app, angular, routes) {
    app.run(function(mobliConfig){
        mobliConfig.load();
    });
    angular.bootstrap(document , ['mobliWebApp']);
});





