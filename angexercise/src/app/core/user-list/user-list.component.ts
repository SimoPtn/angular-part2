import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
 @Input() users!: User[];
 @Output() delete = new EventEmitter<User>();
 @Output() showed = new EventEmitter<User>()
  constructor() { }

  ngOnInit(): void {
  }

}
