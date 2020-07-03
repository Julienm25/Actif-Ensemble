import { Component, OnInit } from '@angular/core';
import { Router, RouterModule,Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {Input}  from '@angular/core';
import { AuthenticationService } from './_services';
import { User } from './_models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';


declare  var jQuery:  any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Actif-Ensemble';
  active: boolean = true;
  showConnexion: boolean = false;
  showInscription: boolean = false;
  currentUser: User;

  constructor(
    private router: Router,
    public authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }

  isSomePage() {
    if (this.router.url.includes('/inscription/page1')||this.router.url.includes('/inscription/page2')) {
      return false;
    } else {
      return true;
    }
  }


  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/accueil']);
  }

  DisplayConnexion(){
      if (this.router.url.includes('/login')) {
        return true;
      } else {
        return false;
      }
  }

  DisplayInscription(){
    if (this.router.url.includes('/signin')) {
      return true;
    } else {
      return false;
    }
  }
}



