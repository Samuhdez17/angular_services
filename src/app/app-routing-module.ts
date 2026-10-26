import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'path';
import { Home } from './components/home/home';
import { Comics } from './components/comics/comics';
import { Personas } from './components/personas/personas';

const routes: Routes = [
  { path: '', component: Home },
  { path: 'comics_service', component: Comics },
  { path: 'personas', component: Personas },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
