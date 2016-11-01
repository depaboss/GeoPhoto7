(function(){
  'use strict';
  angular.module('Planet.planet')
    .config(config);

    function config($routeProvider){
      $routeProvider
        .when('/', {
          templateUrl:'/App/view/planet/template/planet.template.html',
          controller:'PlanetController',
          controllerAs: 'vm'
        })
    }
})();
