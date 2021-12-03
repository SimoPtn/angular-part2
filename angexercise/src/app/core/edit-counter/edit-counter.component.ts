import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/shared/counter.service';


@Component({
  selector: 'angx-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.scss']
})
export class EditCounterComponent implements OnInit {

  defaultCounter! : number;

  constructor( private counterService: CounterService ) { }

  ngOnInit(): void {
    this.defaultCounter = this.counterService.defaultCounter;
  }

  addCounterTs() {
    return this.counterService.addCounter(this.defaultCounter);
  }

  subCounterTs() {
    return this.counterService.subCounter(this.defaultCounter);
  }
}
