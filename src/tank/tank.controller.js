angular.module("wot").controller("tankCtrl", ["tankService", function(tankService) {
    tankService.getTank(this.tankid).then(tank => { this.tank = tank; });
}]);
