import { Component, OnInit } from '@angular/core';
import { Router, RouterModule,Routes } from '@angular/router';
import { NgModule } from '@angular/core';
declare  var jQuery:  any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Actif-Ensemble';

  constructor(public router: Router){}


}

