import { Component, OnInit } from '@angular/core';
import { Router, RouterModule,Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {Input}  from '@angular/core';

declare  var jQuery:  any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Actif-Ensemble';
  active: boolean = true;
  constructor(
    private router: Router
  ) {}
  isSomePage() {
    if (this.router.url.includes('/main')) {
      return true;
    } else {
      return false;
    }
  }
  showConnexion: boolean = false;
  showInscription: boolean = false;

  DisplayConnexion(){
    this.showConnexion = !this.showConnexion;
    this.showInscription = false ;
  }

  DisplayInscription(){
    this.showInscription = !this.showInscription;
    this.showConnexion = false ;
  }


}

