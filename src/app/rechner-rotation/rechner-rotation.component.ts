import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rechner-rotation',
  templateUrl: './rechner-rotation.component.html',
  styleUrls: ['./rechner-rotation.component.css']
})
export class RechnerRotationComponent implements OnInit {

  constructor() { }
  ergebnis = 'noch nix';
  zahl1 = 10;
  zahl2 = 20;

  rechne() {
    let summe = this.zahl1+this.zahl2;
    this.ergebnis = summe.toString();
  }
  ngOnInit() {
  }

}