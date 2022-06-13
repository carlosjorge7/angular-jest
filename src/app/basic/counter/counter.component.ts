import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html'
})
export class CounterComponent implements OnInit {

  cont: number = 10;

  constructor() { }

  ngOnInit(): void {
  }

  incrementar() {
    this.cont++;
  }

  decrementar() {
    this.cont--;
  }

}
