import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBar1Component } from './nav-bar1/nav-bar1.component';
import { Accueil1Component } from './accueil1/accueil1.component';
import { Accueil2Component } from './accueil2/accueil2.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBar1Component,
    Accueil1Component,
    Accueil2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
