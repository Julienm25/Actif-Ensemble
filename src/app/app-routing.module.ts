import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './main/accueil/accueil.component';
import { NosActivitesComponent } from './main/nos-activites/nos-activites.component';
import { MaCommunauteComponent } from './main/ma-communaute/ma-communaute.component';
import { Page1Component } from './inscription/page1/page1.component';
import { Page2Component } from './inscription/page2/page2.component';

const routes: Routes = [
  {  path: '',
    pathMatch: 'full',
    redirectTo: 'main/accueil' },
  {path: 'main/accueil', component: AccueilComponent},
  {path: 'main/nos-activites', component: NosActivitesComponent},
  {path: 'main/ma-communaute', component: MaCommunauteComponent},
  {path: 'inscription/page1', component: Page1Component},
  {path: 'inscription/page2', component: Page2Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
