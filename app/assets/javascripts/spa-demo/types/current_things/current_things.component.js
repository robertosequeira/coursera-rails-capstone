(function () {
  "use strict";

  angular
      .module("spa-demo.types")
      .component("sdCurrentTypeThings", {
        templateUrl: typeThingsTemplateUrl,
        controller: CurrentTypeThingsController
      })
      .component("sdCurrentTypeThingInfo", {
        templateUrl: typeThingInfoTemplateUrl,
        controller: CurrentThingInfoController
      });

  typeThingsTemplateUrl.$inject = ["spa-demo.config.APP_CONFIG"];
  function typeThingsTemplateUrl(APP_CONFIG) {
    return APP_CONFIG.current_type_things_html;
  }

  typeThingInfoTemplateUrl.$inject = ["spa-demo.config.APP_CONFIG"];
  function typeThingInfoTemplateUrl(APP_CONFIG) {
    return APP_CONFIG.current_type_thing_info_html;
  }

  CurrentTypeThingsController.$inject = ["$scope", "spa-demo.types.currentTypes"];
  function CurrentTypeThingsController($scope, currentTypes) {
    var vm = this;
    vm.thingClicked = thingClicked;
    vm.isCurrentThing = currentTypes.isCurrentThingIndex;

    vm.$onInit = function () {
      console.log("CurrentTypeThingsController", $scope);
    };

    vm.$postLink = function () {
      $scope.$watch(
          function () {
            return currentTypes.getThings();
          },
          function (things) {
            vm.things = things;
          }
      );
    };

    return;

    //////////////
    function thingClicked(index) {
      currentTypes.setCurrentThing(index);
    }
  }

  CurrentThingInfoController.$inject = [
    "$scope",
    "spa-demo.types.currentTypes",
    "spa-demo.subjects.Thing",
    "spa-demo.authz.Authz"
  ];
  function CurrentThingInfoController($scope, currentTypes, Thing, Authz) {
    var vm = this;
    vm.nextThing = currentTypes.nextThing;
    vm.previousThing = currentTypes.previousThing;

    vm.$onInit = function () {
      console.log("CurrentThingInfoController", $scope);
    };

    vm.$postLink = function () {
      $scope.$watch(
          function () {
            return currentTypes.getCurrentThing();
          },
          newThing
      );

      $scope.$watch(
          function () {
            return Authz.getAuthorizedUserId();
          },
          function () {
            newThing(currentTypes.getCurrentThing());
          }
      );
    };

    return;
    //////////////
    function newThing(link) {
      vm.link = link;
      vm.thing = null;
      if (link && link.thing_id) {
        vm.thing = Thing.get({id: link.thing_id});
      }
    }
  }
})();
