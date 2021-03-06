(function(){
  'use strict';
  angular.module('Planet.planet')
    .controller('PlanetController', PlanetController);

    PlanetController.$inject=['PlanetService'];

    function PlanetController(PlanetService){
      var vm = this;

      vm.init = function(){
        PlanetService.getList().then(function(data){
          vm.planet = data;
          vm.planet.map(function(index){
            var id = document.getElementById(index.name);
            var img = index.img;
            id.setAttribute('d', img);
            // console.log(id.getBoundingClientRect()); TODO
            vm.testImgEvent()
          })
          return vm.popup = true;
        }).catch(function(err){
          return err;
        }).$promise;
      }

      vm.testImgEvent = function(){
        document.getElementById("image").onchange = function(e) {
          EXIF.getData(e.target.files[0], function() {
            var exif = EXIF.getAllTags(this);
            var long = EXIF.getTag(this, 'GPSLongitude');
            var lat = EXIF.getTag(this, 'GPSLatitude');
            vm.toDecimal(long, lat);
          });
        }
      }

      vm.toDecimal = function (long, lat) {
        vm.GPSLongitude = long[0].numerator + long[1].numerator / (60 * long[1].denominator) + long[2].numerator / (3600 * long[2].denominator);
        vm.GPSLatitude = lat[0].numerator + lat[1].numerator / (60 * lat[1].denominator) + lat[2].numerator / (3600 * lat[2].denominator);
        console.log(vm.GPSLongitude);
        console.log(vm.GPSLatitude);
      };


    }
})();
