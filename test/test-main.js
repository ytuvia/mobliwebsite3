var tests = [];
var pattern = new RegExp("/base/test/spec/.+\.js$");
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (pattern.test(file)) {
            tests.push(file);
        }
    }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/app/scripts',
    paths: {
        "components": "../bower_components",
        "angular": "../bower_components/angular/angular",
        "angular-resource": "../bower_components/angular-resource/angular-resource",
        "angular-mocks": "../bower_components/angular-mocks/angular-mocks",
    },
    shim: {
        'angular' : {'exports' : 'angular'},
        'angular-resource': { deps:['angular']},
        'angular-mocks': { deps:['angular']},
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});