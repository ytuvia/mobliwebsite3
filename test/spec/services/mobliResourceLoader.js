define(['angularMocks', 'services/mobliResourceLoader'], function(){
    describe('service: mobliResourceLoader', function(){

        beforeEach(module('mobliWebApp'));

        var mobliResourceLoader,
            mobliConfig;
        beforeEach(inject(function($injector){
            mobliResourceLoader = $injector.get('mobliResourceLoader');
            mobliConfig = $injector.get('mobliConfig');
        }));

        it('should have a getResource method that grabs a resource from the API', function(){
            expect(mobliResourceLoader).not.toBeUndefined();
            expect(mobliResourceLoader.getResource).not.toBeUndefined();
            var resources = mobliConfig.config.resources;
        });

    });
});