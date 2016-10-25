(function(){
  'use strict';

  angular.module('App.table')
    .controller('TableController', TableController);

    TableController.$inject=[];

    function TableController(){
      var vm = this;

      vm.users = [{
        'id'  : 0,
        'nome' : 'Christian',
        'cognome': 'Pengu',
        'age': 18
      },{
        'id'  : 1,
        'nome' : 'Marco',
        'cognome': 'Rossi',
        'age': 23
      },{
        'id'  : 2,
        'nome' : 'Luca',
        'cognome': 'Bianchi',
        'age': 30
      }
    ];

    vm.newUser = {};
      vm.editUser = function(params){
        vm.newUser.nome = params.nome;
        vm.newUser.cognome = params.cognome;
        vm.newUser.id = params.id;
        vm.newUser.age = params.age;
      }

      vm.save = function(params){
        console.log(params);

        if(!params.nome)return
        if(params.id) return vm.edit(params);

        params.id = vm.users.length +1;
        vm.users.push(params);
        return vm.newUser = {};
      }

      vm.edit = function(params){
        // params.id = vm.users.length +1;
        vm.users.map(function(index, value){
          console.log(params.id);
          if(index.id === params.id)return vm.users[value] = params;
        });
        return vm.newUser = {};
      }

      vm.delete = function(params){
        vm.users.map(function(index){
          if(index.id === params){
            return vm.users.pop(params);}
        });
      }
    }
})();
