import { Component, OnInit, OnDestroy } from '@angular/core';
import { CounterService } from 'src/app/shared/counter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'angx-show-counter',
  templateUrl: './show-counter.component.html',
  styleUrls: ['./show-counter.component.scss']
})
export class ShowCounterComponent implements OnInit {

  constructor( private counterService: CounterService ) { }
  value!: string | number;
  sub!: Subscription;

  ngOnInit(): void {
    this.sub = this.counterService
    .getCounter$()
    .subscribe(
      (result) => (this.value = result >= 0 ? result: 'Errore')
    )
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
