(function () {
  "use strict";

  angular
    .module('app.cities')
    .controller("app.cities.CitiesController", CitiesController);

  CitiesController.$inject = ["app.cities.City"];
  function CitiesController(City) {
    var $ctrl = this;

    $ctrl.cities;
    $ctrl.city;

    $ctrl.edit = edit;
    $ctrl.create = create;
    $ctrl.update = update;
    $ctrl.remove = remove;

    activate();
    return;

    /////////////////////

    function activate() {
      newCity();
      $ctrl.cities = City.query();
    }

    function newCity() {
      $ctrl.city = new City();
    }

    function handleError(response) {
      console.log(response);
    }

    function edit(object) {
      $ctrl.city = object;
    }

    function create() {
      $ctrl.city.$save()
        .then(function (response) {
          $ctrl.cities.push($ctrl.city);
          newCity();
        })
        .catch(handleError);
    }

    function update() {
      $ctrl.city.$update()
        .then(function (response) {
        })
        .catch(handleError);
    }

    function remove() {
      $ctrl.city.$delete()
        .then(function (response) {
          $ctrl.cities = City.query();
          newCity();
        })
        .catch(handleError);
    }

    function removeElement(elements, element) {

    }

  }
})();
