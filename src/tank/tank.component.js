"use strict";

angular.module("wot").component("tank", {
    templateUrl: "/templates/tank.html",
    controller: "tankCtrl",
    bindings: {
        tankid: "@"
    }
});
