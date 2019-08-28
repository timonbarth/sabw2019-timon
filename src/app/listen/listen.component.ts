import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listen',
  templateUrl: './listen.component.html',
  styleUrls: ['./listen.component.css']
})
export class ListenComponent implements OnInit {

  ende: number = 10;
  list: Array<number> = [1, 2];

  constructor() { }

  ngOnInit() {
  }

  zaehle() {
    this.list = [];

    for(let i = 0; i <= this.ende; i++){
      this.list.push(i);
    }
  }

}