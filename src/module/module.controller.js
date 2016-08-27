angular.module("wot").controller("moduleCtrl", ["tankService", function(tankService) {
    tankService.getModule(this.moduleid, this.nation, this.type).then(module => { this.module = module; });
}]);
