(function () {
  "use strict";

  angular
    .module('app.cities')
    .factory('app.cities.City', CityFactory);

  CityFactory.$inject = ["$resource", "app.APP_CONFIG"];
  function CityFactory($resource, APP_CONFIG) {
    return $resource(
      APP_CONFIG.server_url + "/api/cities/:id",
      {id: '@id'},
      {
        update: {method: 'PUT', transformRequest: buildNestedBody},
        save: {method: 'POST', transformRequest: buildNestedBody}
      }
    );
  }

  function buildNestedBody(data) {
    return angular.toJson({city: data});
  }

})();
