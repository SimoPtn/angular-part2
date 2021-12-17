import { Component, OnInit } from '@angular/core';
import { CounterService } from 'src/app/shared/counter.service';


@Component({
  selector: 'angx-edit-counter',
  templateUrl: './edit-counter.component.html',
  styleUrls: ['./edit-counter.component.scss']
})
export class EditCounterComponent implements OnInit {

  value = 1;

  constructor( public counterService: CounterService ) { }

  ngOnInit(): void {

  }

}
