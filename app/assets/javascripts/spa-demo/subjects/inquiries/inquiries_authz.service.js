(function() {
  "use strict";

  angular
    .module("spa-demo.subjects")
    .factory("spa-demo.subjects.InquiriesAuthz", InquiriesAuthzFactory);

  InquiriesAuthzFactory.$inject = ["spa-demo.authz.Authz", "spa-demo.authz.BasePolicy"];
  function InquiriesAuthzFactory(Authz, BasePolicy) {
    function InquiriesAuthz() {
      BasePolicy.call(this, "Inquiry");
    }

    //start with base class prototype definitions
    InquiriesAuthz.prototype = Object.create(BasePolicy.prototype);
    InquiriesAuthz.constructor = InquiriesAuthz;

    InquiriesAuthz.prototype.canQuery = function () {
      return Authz.isCustomer();
    };

    InquiriesAuthz.prototype.canCreate=function() {
      return Authz.isCustomer();
    };

    InquiriesAuthz.prototype.canUpdate = function(inquiry) {
      if (!inquiry) {
        return false;
      } else {
        return !inquiry.id ? this.canCreate() : Authz.isCustomer(inquiry);
      }
    };

    return new InquiriesAuthz();
  }
})();
