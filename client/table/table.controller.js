(function(){
  'use strict';

  angular.module('App.table')
    .controller('TableController', TableController);

    TableController.$inject=['TableService'];

    function TableController(TableService){
      var vm = this;

      vm.getUsers = function(){
        vm.users = TableService.myfunction();
        console.log(vm.users);
      }


    }
})();
