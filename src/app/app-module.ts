import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Menu } from './components/menu/menu';
import { Home } from './components/home/home';
import { ComicsService } from './services/comics.service';
import { Comics } from './components/comics/comics';
import { provideHttpClient } from '@angular/common/http';
import { PersonasService } from './services/personas.service';
import { Personas } from './components/personas/personas';
import { Coches } from './components/coches/coches';
import { CochesService } from './services/coches.service';
import { PlantillaFunciones } from './components/plantilla-funciones/plantilla-funciones';
import { FuncionesService } from './services/funciones.service';
import { PlantillaFuncionesMultiple } from './components/plantilla-funciones-multiple/plantilla-funciones-multiple';

@NgModule({
  declarations: [
    App,
    Menu,
    Home,
    Comics,
    Personas,
    Coches,
    PlantillaFunciones,
    PlantillaFuncionesMultiple,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(),
    ComicsService,
    provideHttpClient(),
    PersonasService,
    CochesService,
    FuncionesService,
  ],
  bootstrap: [App],
})
export class AppModule {}
