angular.module("wot").component("tank", {
    bindings: {
        tankid: "@"
    },
    controller: "tankCtrl",
    templateUrl: "/templates/tank.html",
});
