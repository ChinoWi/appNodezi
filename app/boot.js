System.register(["angular2/platform/browser", "./app_components/portada/portada", "angular2/core", "angular2/router"], function(exports_1) {
    var browser_1, portada_1, core_1, router_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (portada_1_1) {
                portada_1 = portada_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(portada_1.MoviesComponent, [router_1.ROUTER_PROVIDERS, core_1.provide(router_1.APP_BASE_HREF, { useValue: "/" })]);
        }
    }
});
//# sourceMappingURL=boot.js.map