import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h1>Hola counter</h1>
  <span>Contador: {{counter}} </span>
  <button (click)="add()">agregar +2</button>
  <button (click)="subs()">agregar -2</button>
  <button (click)="setCounterTo(10)">settear contador</button>
  `
})

export class CounterComponent {
  constructor() { }
  public counter: number = 10;

  add(): void {
    this.counter += 2;
  };

  subs(): void {
    this.counter -= 2;
  }

  setCounterTo(value: number): void {
    this.counter = value;
  }
}
