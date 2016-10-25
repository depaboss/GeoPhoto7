(function(){
  'use strict';

  angular.module('App')
    .controller('UserController', UserController);

    UserController.$inject = []

    function UserController(){
      var vm = this;

      console.log('miao');
    }

})();
