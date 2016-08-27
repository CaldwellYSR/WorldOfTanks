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
