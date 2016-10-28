(function(){
  'use strict';

  angular.module('App.table')
    .factory('TableService', TableService);

    TableService.$inject = [];

    function TableService(){

      var users = [{
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
      }];

      return {
        myfunction : myfunction,
        editUserService: editUserService
      }

      function editUserService(userEdit){
        users.map(function(index, value){
          if (index.id == userEdit.id) {
            index.nome = userEdit.nome;
            index.cognome = userEdit.cognome;
            index.age = userEdit.age;
          }
        })
        return
      }

      function myfunction(){
        console.log('sono ioooo');
        return users
      }

    }

})();
