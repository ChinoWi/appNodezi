//portada.ts
import {Component} from "angular2/core";
import {PortadainicioComponent} from "../portada_inicio/portadainicio";
import {PortadaInformacionComponent} from  "../portada_informacion/portadainformacion";
import {PortadaPreguntasComponent} from  "../portada_preguntas/portadapreguntas"
import {PortadaContactoComponent} from "../portada_contactenos/portadacontactenos"

@Component({
    directives: [
        PortadainicioComponent,
        PortadaInformacionComponent,
        PortadaPreguntasComponent,
        PortadaContactoComponent],
    selector: "app-portada",
    templateUrl: "./resource/view/layout/templatePortada.html"
})

export class MoviesComponent {

}