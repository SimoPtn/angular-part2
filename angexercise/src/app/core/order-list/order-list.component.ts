import { Component, Input, OnInit } from '@angular/core';
import { User, Role, Gender } from '../../models/user';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  @Input() users!: User[];
  constructor() { }

  ngOnInit(): void {
  }

}
