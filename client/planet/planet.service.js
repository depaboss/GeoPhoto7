(function(){
  'use strict';

  angular.module('Planet')
    .factory('PlanetService', PlanetService)

    PlanetService.$inject = ['$resource']

    function PlanetService($resource){

      var Planet = $resource('/planet',null,{'query': {isArray: true, method: 'GET'}});

      return {
        getList:getList
      }

      function getList(callback){
        callback = callback || angular.noop;
        return Planet.query(function(data){
          return callback(data);
        }, function(err){
          return callback(err);
        }).$promise;
      }
    }

})()
 
