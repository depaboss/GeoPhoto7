(function(){
  'use strict';

  var App = angular.module('App',[]);
  
 })();

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

//# sourceMappingURL=build/App/bundle.js.map
