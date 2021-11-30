import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.scss']
})
export class UserSingleComponent implements OnInit {
  @Input() user!: User;
  @Output() delete = new EventEmitter<User>();
  @Output() showed = new EventEmitter<User>();
  constructor() { }

  ngOnInit(): void {
  }

}
