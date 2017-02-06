(function () {
  "use strict";

  angular
    .module("app.cities")
    .directive("sdCities", CitiesDirective);

  CitiesDirective.$inject = ["app.APP_CONFIG"];
  function CitiesDirective(APP_CONFIG) {
    var directive = {
      templateUrl: APP_CONFIG.cities_html,
      replace: true,
      bindToController: true,
      controller: "app.cities.CitiesController",
      controllerAs: "citiesCtrl",
      link: link,
      restrict: "E",
      scope: {}
    };
    return directive;

    function link(scope, element, attrs) {
      console.log("CitiesDirective", scope)
    }
  }
})();
