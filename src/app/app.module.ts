import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }      from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './main/accueil/accueil.component';
import { InscriptionComponent } from './main/inscription/inscription.component';
import { NosActivitesComponent } from './main/nos-activites/nos-activites.component';
import { MaCommunauteComponent } from './main/ma-communaute/ma-communaute.component';
import { ConnexionComponent } from './main/connexion/connexion.component';
import { Page1Component } from './inscription/page1/page1.component';
import { Page2Component } from './inscription/page2/page2.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    InscriptionComponent,
    NosActivitesComponent,
    MaCommunauteComponent,
    ConnexionComponent,
    Page1Component,
    Page2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
