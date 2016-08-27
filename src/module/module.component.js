angular.module("wot").component("module", {
    bindings: {
        nation: "@",
        moduleid: "@",
        type: "@"
    },
    controller: "moduleCtrl",
    templateUrl: "/templates/module.html"
});
