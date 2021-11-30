import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';


@Component({
  selector: 'app-order-single',
  templateUrl: './order-single.component.html',
  styleUrls: ['./order-single.component.scss']
})
export class OrderSingleComponent implements OnInit {
 @Input() user!: User;
  constructor() { }

  ngOnInit(): void {
  }

}
