import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/shared/counter.service';

@Component({
  selector: 'angx-show-counter',
  templateUrl: './show-counter.component.html',
  styleUrls: ['./show-counter.component.scss']
})
export class ShowCounterComponent implements OnInit {

  constructor( private counterService: CounterService ) { }

  ngOnInit(): void {

  }

  getCounterTs() {
    return this.counterService.getCounter();
  }

}
