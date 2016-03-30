import {bootstrap} from "angular2/platform/browser";
import {MoviesComponent} from "./app_components/portada/portada";
import {provide} from "angular2/core";
import {APP_BASE_HREF,ROUTER_PROVIDERS} from "angular2/router";

bootstrap(MoviesComponent,[ROUTER_PROVIDERS,provide(APP_BASE_HREF,{useValue:"/"})]);
