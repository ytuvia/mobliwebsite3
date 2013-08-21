define(['angular', 'angularMocks', 'services/mobliConfig'], function(angular) {
    describe('Service: mobliConfig', function () {

        var mobliConfig,mobliConstants, httpBackend, test_token;

        beforeEach(module('website3xApp'));

        beforeEach(inject(function($injector){
            mobliConfig = $injector.get('mobliConfig');
            mobliConstants = $injector.get('mobliConstants');
            httpBackend = $injector.get('$httpBackend');
            test_token = new Date().getTime();
            httpBackend.expectGET(mobliConfig.getConfig().configUrl).respond(
                {test_token:test_token}
            );
        }));

        it('should have load config with mock data', function(){
            expect(mobliConfig.getConfig).not.toEqual(null);
            mobliConfig.load();
            var promise = mobliConfig.getPromise();
            expect(angular.isFunction(promise.then)).toBeTruthy();
            promise.then(function (data) {
                expect(data.test_token).toBe(test_token);
            });
            httpBackend.flush();
        });

    });
});