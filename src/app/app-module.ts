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

@NgModule({
  declarations: [App, Menu, Home, Comics, Personas],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideClientHydration(),
    ComicsService,
    provideHttpClient(),
    PersonasService,
  ],
  bootstrap: [App],
})
export class AppModule {}
