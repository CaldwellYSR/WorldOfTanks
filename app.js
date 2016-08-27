"use strict";

angular.module("wot", []);

angular.module("wot").component("module", {
    bindings: {
        nation: "@",
        moduleid: "@",
        type: "@"
    },
    controller: "moduleCtrl",
    templateUrl: "/templates/module.html"
});

angular.module("wot").controller("moduleCtrl", ["tankService", function(tankService) {
    tankService.getModule(this.moduleid, this.nation, this.type).then(module => { this.module = module; });
}]);

angular.module("wot").component("tank", {
    bindings: {
        tankid: "@"
    },
    controller: "tankCtrl",
    templateUrl: "/templates/tank.html",
});

angular.module("wot").controller("tankCtrl", ["tankService", function(tankService) {
    tankService.getTank(this.tankid).then(tank => { this.tank = tank; });
}]);

angular.module("wot").factory("tankService", ["$http", function($http) {
    return {
        getTank: function getTank(id) {
            var wotUrl = "https://api.worldoftanks.com/wot/encyclopedia/vehicles/?application_id=756298c9379fd8c3bf5f8ee3d0c19514";
            wotUrl += "&tank_id=" + id;
            var promise = $http.get(wotUrl).then(function(response) {
                return response.data.data[id];
            });
            return promise;
        },
        getModule: function getModule(id, nation, type) {
            var wotUrl = "https://api.worldoftanks.com/wot/encyclopedia/modules/?application_id=756298c9379fd8c3bf5f8ee3d0c19514";
            wotUrl += "&type=" + type;
            wotUrl += "&nation=" + nation;
            wotUrl += "&module_id=" + id;
            var promise = $http.get(wotUrl).then(function(response) {
                return response.data.data[id];
            });
            return promise;
        }
    }
}]);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwibW9kdWxlL21vZHVsZS5jb21wb25lbnQuanMiLCJtb2R1bGUvbW9kdWxlLmNvbnRyb2xsZXIuanMiLCJ0YW5rL3RhbmsuY29tcG9uZW50LmpzIiwidGFuay90YW5rLmNvbnRyb2xsZXIuanMiLCJ0YW5rL3Rhbmsuc2VydmljZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5hbmd1bGFyLm1vZHVsZShcIndvdFwiLCBbXSk7XG4iLCJhbmd1bGFyLm1vZHVsZShcIndvdFwiKS5jb21wb25lbnQoXCJtb2R1bGVcIiwge1xuICAgIGJpbmRpbmdzOiB7XG4gICAgICAgIG5hdGlvbjogXCJAXCIsXG4gICAgICAgIG1vZHVsZWlkOiBcIkBcIixcbiAgICAgICAgdHlwZTogXCJAXCJcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6IFwibW9kdWxlQ3RybFwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi90ZW1wbGF0ZXMvbW9kdWxlLmh0bWxcIlxufSk7XG4iLCJhbmd1bGFyLm1vZHVsZShcIndvdFwiKS5jb250cm9sbGVyKFwibW9kdWxlQ3RybFwiLCBbXCJ0YW5rU2VydmljZVwiLCBmdW5jdGlvbih0YW5rU2VydmljZSkge1xuICAgIHRhbmtTZXJ2aWNlLmdldE1vZHVsZSh0aGlzLm1vZHVsZWlkLCB0aGlzLm5hdGlvbiwgdGhpcy50eXBlKS50aGVuKG1vZHVsZSA9PiB7IHRoaXMubW9kdWxlID0gbW9kdWxlOyB9KTtcbn1dKTtcbiIsImFuZ3VsYXIubW9kdWxlKFwid290XCIpLmNvbXBvbmVudChcInRhbmtcIiwge1xuICAgIGJpbmRpbmdzOiB7XG4gICAgICAgIHRhbmtpZDogXCJAXCJcbiAgICB9LFxuICAgIGNvbnRyb2xsZXI6IFwidGFua0N0cmxcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIvdGVtcGxhdGVzL3RhbmsuaHRtbFwiLFxufSk7XG4iLCJhbmd1bGFyLm1vZHVsZShcIndvdFwiKS5jb250cm9sbGVyKFwidGFua0N0cmxcIiwgW1widGFua1NlcnZpY2VcIiwgZnVuY3Rpb24odGFua1NlcnZpY2UpIHtcbiAgICB0YW5rU2VydmljZS5nZXRUYW5rKHRoaXMudGFua2lkKS50aGVuKHRhbmsgPT4geyB0aGlzLnRhbmsgPSB0YW5rOyB9KTtcbn1dKTtcbiIsImFuZ3VsYXIubW9kdWxlKFwid290XCIpLmZhY3RvcnkoXCJ0YW5rU2VydmljZVwiLCBbXCIkaHR0cFwiLCBmdW5jdGlvbigkaHR0cCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGdldFRhbms6IGZ1bmN0aW9uIGdldFRhbmsoaWQpIHtcbiAgICAgICAgICAgIHZhciB3b3RVcmwgPSBcImh0dHBzOi8vYXBpLndvcmxkb2Z0YW5rcy5jb20vd290L2VuY3ljbG9wZWRpYS92ZWhpY2xlcy8/YXBwbGljYXRpb25faWQ9NzU2Mjk4YzkzNzlmZDhjM2JmNWY4ZWUzZDBjMTk1MTRcIjtcbiAgICAgICAgICAgIHdvdFVybCArPSBcIiZ0YW5rX2lkPVwiICsgaWQ7XG4gICAgICAgICAgICB2YXIgcHJvbWlzZSA9ICRodHRwLmdldCh3b3RVcmwpLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YS5kYXRhW2lkXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgICAgIH0sXG4gICAgICAgIGdldE1vZHVsZTogZnVuY3Rpb24gZ2V0TW9kdWxlKGlkLCBuYXRpb24sIHR5cGUpIHtcbiAgICAgICAgICAgIHZhciB3b3RVcmwgPSBcImh0dHBzOi8vYXBpLndvcmxkb2Z0YW5rcy5jb20vd290L2VuY3ljbG9wZWRpYS9tb2R1bGVzLz9hcHBsaWNhdGlvbl9pZD03NTYyOThjOTM3OWZkOGMzYmY1ZjhlZTNkMGMxOTUxNFwiO1xuICAgICAgICAgICAgd290VXJsICs9IFwiJnR5cGU9XCIgKyB0eXBlO1xuICAgICAgICAgICAgd290VXJsICs9IFwiJm5hdGlvbj1cIiArIG5hdGlvbjtcbiAgICAgICAgICAgIHdvdFVybCArPSBcIiZtb2R1bGVfaWQ9XCIgKyBpZDtcbiAgICAgICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KHdvdFVybCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhLmRhdGFbaWRdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgICAgfVxuICAgIH1cbn1dKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
