import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }      from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './main/accueil/accueil.component';
import { InscriptionComponent } from './main/inscription/inscription.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './main/navbar/navbar.component';
import { NosActivitesComponent } from './main/nos-activites/nos-activites.component';
import { MaCommunauteComponent } from './main/ma-communaute/ma-communaute.component';
import { ConnexionComponent } from './main/connexion/connexion.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    InscriptionComponent,
    WelcomeComponent,
    NavbarComponent,
    NosActivitesComponent,
    MaCommunauteComponent,
    ConnexionComponent,
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
