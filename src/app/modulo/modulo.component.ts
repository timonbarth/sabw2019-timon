import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modulo',
  templateUrl: './modulo.component.html',
  styleUrls: ['./modulo.component.css']
})
export class ModuloComponent implements OnInit {

  constructor() { }
ergebnis = 'noch nix';
  zahl1 = 10;
  zahl2 = 20;
  ngOnInit() {
  }
rechne() {
    let summe = this.zahl1/this.zahl2;
    this.ergebnis = summe.toString();
  }
}