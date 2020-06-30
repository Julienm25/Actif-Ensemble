import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';


import { JwtInterceptor, ErrorInterceptor } from './_helpers';

import { appRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './main/accueil/accueil.component';
import { InscriptionComponent } from './main/inscription/inscription.component';
import { NosActivitesComponent } from './main/nos-activites/nos-activites.component';
import { MaCommunauteComponent } from './main/ma-communaute/ma-communaute.component';
import { Page1Component } from './inscription/page1/page1.component';
import { Page2Component } from './inscription/page2/page2.component';
import { LoginComponent } from './main/login';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    InscriptionComponent,
    NosActivitesComponent,
    MaCommunauteComponent,
    Page1Component,
    Page2Component,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    appRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {


}
