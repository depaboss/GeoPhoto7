(function(){
  'use strict';

  angular.module('App.table')
    .controller('TableController', TableController);

    TableController.$inject=['TableService'];

    function TableController(TableService){
      var vm = this;
      vm.userInfo= {};

      vm.getUsers = function(){
        vm.users = TableService.myfunction();
      }

      vm.getUser = function(user){
        vm.userInfo = angular.copy(user);
      }

      vm.macome = function(){
        console.log(vm.users);
      }

      vm.editUser = function(){
        console.log(TableService.editUserService(vm.userInfo));
        debugger;
        console.log(vm.users);
        TableService.editUserService(vm.userInfo);
        console.log(vm.users);

        debugger;

        vm.userInfo = {};
      }

    }
})();
