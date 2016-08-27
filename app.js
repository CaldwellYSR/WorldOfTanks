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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIiwidGFuay90YW5rLmNvbXBvbmVudC5qcyIsInRhbmsvdGFuay5jb250cm9sbGVyLmpzIiwidGFuay90YW5rLnNlcnZpY2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImFuZ3VsYXIubW9kdWxlKFwid290XCIsIFtdKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG5hbmd1bGFyLm1vZHVsZShcIndvdFwiKS5jb21wb25lbnQoXCJ0YW5rXCIsIHtcbiAgICB0ZW1wbGF0ZVVybDogXCIvdGVtcGxhdGVzL3RhbmsuaHRtbFwiLFxuICAgIGNvbnRyb2xsZXI6IFwidGFua0N0cmxcIixcbiAgICBiaW5kaW5nczoge1xuICAgICAgICB0YW5raWQ6IFwiQFwiXG4gICAgfVxufSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuYW5ndWxhci5tb2R1bGUoXCJ3b3RcIikuY29udHJvbGxlcihcInRhbmtDdHJsXCIsIFtcInRhbmtTZXJ2aWNlXCIsIGZ1bmN0aW9uKHRhbmtTZXJ2aWNlKSB7XG4gICAgdGFua1NlcnZpY2UuZ2V0VGFuayh0aGlzLnRhbmtpZCkudGhlbih0YW5rID0+IHsgdGhpcy50YW5rID0gdGFuazsgfSk7XG59XSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuYW5ndWxhci5tb2R1bGUoXCJ3b3RcIikuZmFjdG9yeShcInRhbmtTZXJ2aWNlXCIsIFtcIiRodHRwXCIsIGZ1bmN0aW9uKCRodHRwKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0VGFuazogZnVuY3Rpb24gZ2V0VGFuayhpZCkge1xuICAgICAgICAgICAgdmFyIHdvdFVybCA9IFwiaHR0cHM6Ly9hcGkud29ybGRvZnRhbmtzLmNvbS93b3QvZW5jeWNsb3BlZGlhL3ZlaGljbGVzLz9hcHBsaWNhdGlvbl9pZD03NTYyOThjOTM3OWZkOGMzYmY1ZjhlZTNkMGMxOTUxNFwiO1xuICAgICAgICAgICAgd290VXJsICs9IFwiJnRhbmtfaWQ9XCIgKyBpZDtcbiAgICAgICAgICAgIHZhciBwcm9taXNlID0gJGh0dHAuZ2V0KHdvdFVybCkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhLmRhdGFbaWRdO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICAgICAgfVxuICAgIH1cbn1dKTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
