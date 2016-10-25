(function(){
  'use strict';

  var App = angular.module('App',[
    'App.table'
  ]);

 })();

(function(){
  'use strict';

  angular.module('App.table', []);

})();

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

(function(){
  'use strict';

  angular.module('App.table')
    .factory('TableService', TableService);

    TableService.$inject = [];

    function TableService(){

      return {

      }
    }

})();

(function(){
  'use strict';

  angular.module('App')
    .controller('UserController', UserController);

        UserController.$inject = [];

        function UserController(){
          var vm = this;
          vm.users = [{
            'nome' : 'Christian',
            'cognome': 'Pengu',
            'age': 18
          },{
            'nome' : 'Marco',
            'cognome': 'Rossi',
            'age': 23
          },{
            'nome' : 'Luca',
            'cognome': 'Bianchi',
            'age': 30
          }
        ];

          vm.print= function(){
            console.info(vm.saluta);
            // vm.saluta = 'Ciao ' +vm.user.nome + ' ' + vm.user.cognome + ' ' + vm.user.age;
            console.log(vm.saluta);

          }

        }

})();

//# sourceMappingURL=build/App/bundle.js.map
