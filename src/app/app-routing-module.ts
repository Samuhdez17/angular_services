import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { Home } from './components/home/home';
import { Comics } from './components/comics/comics';
import { Personas } from './components/personas/personas';
import { Coches } from './components/coches/coches';
import { PlantillaFunciones } from './components/plantilla-funciones/plantilla-funciones';
import { PlantillaFuncionesMultiple } from './components/plantilla-funciones-multiple/plantilla-funciones-multiple';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'comics_service', component: Comics },
  { path: 'personas', component: Personas },
  { path: 'coches', component: Coches },
  { path: 'plantilla', component: PlantillaFunciones },
  { path: 'plantilla_multiple', component: PlantillaFuncionesMultiple },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
