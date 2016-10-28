(function(){
  'use strict';

  var App = angular.module('App',[
    'ngRoute',

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
    .config(config);

    function config($routeProvider){
      $routeProvider
        .when('/table', {
          templateUrl:'table/template/table.template.html',
          controller:'TableController',
          controllerAs: 'vm'
        })
    }
})();

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
        myfunction : myfunction
      }

      function myfunction(){
        return users
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
