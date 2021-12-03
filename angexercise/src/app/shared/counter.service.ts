import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counter: number = 0;
  defaultCounter: number = 1;

  constructor() { }

  public getCounter() {
    if (this.counter >= 0) {
      return this.counter
    } else {
      this.counter = 0;
      return 'error'
    }
  }

  public addCounter(value: number) {
    return this.counter += value;
  }

  public subCounter(value: number) {
    return this.counter -= value;
  }


}
