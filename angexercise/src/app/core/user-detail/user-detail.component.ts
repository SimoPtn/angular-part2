import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User, Role, Gender } from '../../models/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  @Output() deshowed = new EventEmitter<User>();
  @Input() user!: User;
  constructor() { }

  ngOnInit(): void {
  }

}
