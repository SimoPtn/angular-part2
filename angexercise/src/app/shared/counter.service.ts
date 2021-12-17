import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  private counterSubject = new BehaviorSubject<number>(0);
  private counter = 0;

  constructor() { }

  public getCounter$(): Observable<number> {
    return this.counterSubject.asObservable();
  }

  public addCounter$(value= 1): void {
    this.counterSubject.next((this.counter += value));
  }

  public subCounter$(value = 1): void {
    if (this.counter > 0) {
      this.counterSubject.next((this.counter -= value));
    } else {
      console.error('Errore');
    }
  }


}
