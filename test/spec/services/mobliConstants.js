define(['angularMocks', 'services/mobliConstants'], function() {
    describe('Constants: mobliConstans', function () {

        beforeEach(module('website3xApp'));

        var mobliConstants;
        beforeEach(inject(function($injector){
            mobliConstants = $injector.get('mobliConstants');
        }));

        it('should have mandatory property', function(){
            expect(mobliConstants.CONFIG_URL).not.toEqual(null);
            expect(mobliConstants.API_URL).not.toEqual(null);
            expect(mobliConstants.PLUGINS).not.toEqual(null);
            expect(mobliConstants.PLUGINS.mobli).not.toEqual(null);
        });
    });
});