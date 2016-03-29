System.register(["angular2/core", "../portada_inicio/portadainicio", "../portada_informacion/portadainformacion", "../portada_preguntas/portadapreguntas", "../portada_contactenos/portadacontactenos"], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, portadainicio_1, portadainformacion_1, portadapreguntas_1, portadacontactenos_1;
    var MoviesComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (portadainicio_1_1) {
                portadainicio_1 = portadainicio_1_1;
            },
            function (portadainformacion_1_1) {
                portadainformacion_1 = portadainformacion_1_1;
            },
            function (portadapreguntas_1_1) {
                portadapreguntas_1 = portadapreguntas_1_1;
            },
            function (portadacontactenos_1_1) {
                portadacontactenos_1 = portadacontactenos_1_1;
            }],
        execute: function() {
            MoviesComponent = (function () {
                function MoviesComponent() {
                }
                MoviesComponent = __decorate([
                    core_1.Component({
                        directives: [
                            portadainicio_1.PortadainicioComponent,
                            portadainformacion_1.PortadaInformacionComponent,
                            portadapreguntas_1.PortadaPreguntasComponent,
                            portadacontactenos_1.PortadaContactoComponent],
                        selector: "app-portada",
                        templateUrl: "./resource/view/layout/templatePortada.html"
                    }), 
                    __metadata('design:paramtypes', [])
                ], MoviesComponent);
                return MoviesComponent;
            })();
            exports_1("MoviesComponent", MoviesComponent);
        }
    }
});
//# sourceMappingURL=portada.js.map