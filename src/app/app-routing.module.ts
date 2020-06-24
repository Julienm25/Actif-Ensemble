import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './main/accueil/accueil.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NosActivitesComponent } from './main/nos-activites/nos-activites.component';
import { MaCommunauteComponent } from './main/ma-communaute/ma-communaute.component';
import { ConnexionComponent } from './main/connexion/connexion.component';

const routes: Routes = [
  {  path: '',
    pathMatch: 'full',
    redirectTo: 'welcome' },
  {path: 'welcome', component: WelcomeComponent},
  {path: 'main/accueil', component: AccueilComponent},
  {path: 'main/nos-activites', component: NosActivitesComponent},
  {path: 'main/ma-communaute', component: MaCommunauteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
