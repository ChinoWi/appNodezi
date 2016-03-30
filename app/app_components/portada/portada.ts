//portada.ts
import {Component} from "angular2/core";
import {PortadainicioComponent} from "../portada_inicio/portadainicio";
import {PortadaInformacionComponent} from  "../portada_informacion/portadainformacion";
import {PortadaPreguntasComponent} from  "../portada_preguntas/portadapreguntas"
import {PortadaContactoComponent} from "../portada_contactenos/portadacontactenos"
import {ROUTER_DIRECTIVES,RouteConfig} from "angular2/router";

@Component({
        selector: "app-portada",
    templateUrl: "./resource/view/layout/templatePortada.html",
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path:'/',as:'Inicio',component:PortadainicioComponent,useDefault:true},
    {path:'/Informacion',as:'Informacion',component:PortadaInformacionComponent},
    {path:'/Preguntas',as:'Preguntas',component:PortadaPreguntasComponent},
    {path:'/Contacto',as:'Contacto',component:PortadaContactoComponent},

])
export class MoviesComponent {

}