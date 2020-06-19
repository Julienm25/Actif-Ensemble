import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil1',
  templateUrl: './accueil1.component.html',
  styleUrls: ['./accueil1.component.css'],
  styles: [`
    body{
      height: 100%;
      position: absolute;
      width: 50%;
      left: 0;
    }

`]

})
export class Accueil1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
