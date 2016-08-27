angular.module("wot", []);

"use strict";

angular.module("wot").component("tank", {
    templateUrl: "/templates/tank.html",
    controller: "tankCtrl",
    bindings: {
        tankid: "@"
    }
});

"use strict";

angular.module("wot").controller("tankCtrl", ["tankService", function(tankService) {
    tankService.getTank(this.tankid).then(tank => { this.tank = tank; });
}]);

"use strict";

angular.module("wot").factory("tankService", ["$http", function($http) {
    return {
        getTank: function getTank(id) {
            var wotUrl = "https://api.worldoftanks.com/wot/encyclopedia/vehicles/?application_id=756298c9379fd8c3bf5f8ee3d0c19514";
            wotUrl += "&tank_id=" + id;
            var promise = $http.get(wotUrl).then(function(response) {
                return response.data.data[id];
            });
            return promise;
        }
    }
}]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsInRhbmsvdGFuay5jb21wb25lbnQuanMiLCJ0YW5rL3RhbmsuY29udHJvbGxlci5qcyIsInRhbmsvdGFuay5zZXJ2aWNlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZShcIndvdFwiLCBbXSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuYW5ndWxhci5tb2R1bGUoXCJ3b3RcIikuY29tcG9uZW50KFwidGFua1wiLCB7XG4gICAgdGVtcGxhdGVVcmw6IFwiL3RlbXBsYXRlcy90YW5rLmh0bWxcIixcbiAgICBjb250cm9sbGVyOiBcInRhbmtDdHJsXCIsXG4gICAgYmluZGluZ3M6IHtcbiAgICAgICAgdGFua2lkOiBcIkBcIlxuICAgIH1cbn0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmFuZ3VsYXIubW9kdWxlKFwid290XCIpLmNvbnRyb2xsZXIoXCJ0YW5rQ3RybFwiLCBbXCJ0YW5rU2VydmljZVwiLCBmdW5jdGlvbih0YW5rU2VydmljZSkge1xuICAgIHRhbmtTZXJ2aWNlLmdldFRhbmsodGhpcy50YW5raWQpLnRoZW4odGFuayA9PiB7IHRoaXMudGFuayA9IHRhbms7IH0pO1xufV0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmFuZ3VsYXIubW9kdWxlKFwid290XCIpLmZhY3RvcnkoXCJ0YW5rU2VydmljZVwiLCBbXCIkaHR0cFwiLCBmdW5jdGlvbigkaHR0cCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldFRhbms6IGZ1bmN0aW9uIGdldFRhbmsoaWQpIHtcbiAgICAgICAgICAgIHZhciB3b3RVcmwgPSBcImh0dHBzOi8vYXBpLndvcmxkb2Z0YW5rcy5jb20vd290L2VuY3ljbG9wZWRpYS92ZWhpY2xlcy8/YXBwbGljYXRpb25faWQ9NzU2Mjk4YzkzNzlmZDhjM2JmNWY4ZWUzZDBjMTk1MTRcIjtcbiAgICAgICAgICAgIHdvdFVybCArPSBcIiZ0YW5rX2lkPVwiICsgaWQ7XG4gICAgICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldCh3b3RVcmwpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5kYXRhW2lkXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICAgIH1cbiAgICB9XG59XSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
