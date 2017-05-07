(function() {
  "use strict";

  angular
      .module("spa-demo.types")
      .component("sdTypesSearch", {
        templateUrl: typesSearchTemplateUrl,
        controller: TypesSearchController
      });

  typesSearchTemplateUrl.$inject = ["spa-demo.config.APP_CONFIG"];
  function typesSearchTemplateUrl(APP_CONFIG) {
    return APP_CONFIG.types_search_html;
  }

  TypesSearchController.$inject = ["$scope", "spa-demo.types.currentTypes"];
  function TypesSearchController($scope, currentTypes) {
    var vm = this;
    vm.typeSearch = currentTypes.typeSearch;
    vm.searchByType = searchByType;
    vm.resetSearch = resetSearch;
    vm.$onInit = function () {
      console.log("CurrentSubjectsMapController", $scope);
    };

    return;

    function searchByType(){
      var type = vm.typeSearch.trim();
      currentTypes.searchByType(type);
    }

    function resetSearch(){
      vm.typeSearch = '';
      currentTypes.searchByType(vm.typeSearch);
    }
  }

})();
