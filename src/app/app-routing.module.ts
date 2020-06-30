import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_helpers';

import { AccueilComponent } from './main/accueil/accueil.component';
import { NosActivitesComponent } from './main/nos-activites/nos-activites.component';
import { MaCommunauteComponent } from './main/ma-communaute/ma-communaute.component';
import { Page1Component } from './inscription/page1/page1.component';
import { Page2Component } from './inscription/page2/page2.component';
import { LoginComponent } from './main/login';

const routes: Routes = [
  {path: 'accueil', component: AccueilComponent},
  {path: 'nos-activites', component: NosActivitesComponent},
  {path: 'ma-communaute', component: MaCommunauteComponent},
  {path: 'login', component: AccueilComponent },
  {path: 'inscription/page1', component: Page1Component},
  {path: 'inscription/page2', component: Page2Component},
  { path: '**', redirectTo: 'accueil' }
];

export const appRoutingModule = RouterModule.forRoot(routes);
