import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {InscriptionComponent} from "./inscription/inscription.component";
import { AccueilComponent } from './accueil/accueil.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NosActivitesComponent } from './nos-activites/nos-activites.component';
import { MaCommunauteComponent } from './ma-communaute/ma-communaute.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  {path: 'inscription', component: InscriptionComponent},
  {path: 'accueil', component: AccueilComponent},
  {path: 'nos-activites', component: NosActivitesComponent},
  {path: 'ma-communaute', component: MaCommunauteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
