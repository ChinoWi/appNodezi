System.register(["angular2/platform/browser", "./app_components/portada/portada"], function(exports_1) {
    var browser_1, portada_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (portada_1_1) {
                portada_1 = portada_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(portada_1.MoviesComponent);
        }
    }
});
//# sourceMappingURL=boot.js.map