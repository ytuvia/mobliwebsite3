define(['app', 'angular', 'services/mobliConstants', 'angular-resource', 'angular-mocks'], function(app, angular, mobliConstants, mock) {
    describe('Constants: mobliConstans', function () {

        // load the service's module
        beforeEach(function(){
            mock.module('mobliConstants');
        });

        it('should do something', inject(function (value) {
            expect(!!value).toBe(true);
        }));

        it('should have mandatory property', function(){
            expect(mobliConstants.CONFIG_URL).not.toEqual(null);
            expect(mobliConstants.API_URL).not.toEqual(null);
            expect(mobliConstants.PLUGINS).not.toEqual(null);
            expect(mobliConstants.PLUGINS.mobli).not.toEqual(null);
        });
    });
});

/*'use strict';

describe('Service: mobliConstants', function () {

  // load the service's module
  beforeEach(module('website3xApp'));

  // instantiate service
  var mobliConstants;
  beforeEach(inject(function (_mobliConstants_) {
    mobliConstants = _mobliConstants_;
  }));

  it('should do something', function () {
    expect(!!mobliConstants).toBe(true);
  });

    it('should have mandatory property', function(){
        expect(mobliConstants.CONFIG_URL).not.toEqual(null);
        expect(mobliConstants.API_URL).not.toEqual(null);
        expect(mobliConstants.PLUGINS).not.toEqual(null);
        expect(mobliConstants.PLUGINS.mobli).not.toEqual(null);
    });
});
*/