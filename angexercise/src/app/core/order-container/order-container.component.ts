import { Component, OnInit } from '@angular/core';
import { User, Role, Gender } from '../../models/user';

@Component({
  selector: 'app-order-container',
  templateUrl: './order-container.component.html',
  styleUrls: ['./order-container.component.scss']
})
export class OrderContainerComponent implements OnInit {
  users: User[] = [
    {
      id: 3487,
      name: 'Mario',
      surname: 'Rossi',
      age: 25,
      dateOfBirth: '1995-14-12',
      address: {
        city: 'Roma',
        street: 'Via roma 10',
        postalCode: '00100'
      },
      role: Role.staff,
      username: 'MarioRossi80',
      profilePhotoUrl: 'https://bit.ly/3yRngEP',
      gender: Gender.male
    },
    {
      id: 12312,
      name: 'Maria',
      surname: 'Rossa',
      age: 26,
      dateOfBirth: '1994-10-11',
      address: {
        city: 'Palermo',
        street: 'Via Palermo 10',
        postalCode: '90100'
      },
      role: Role.manager,
      username: 'MariaRossa94',
      profilePhotoUrl: 'https://bit.ly/3DWWxuj',
      gender: Gender.female
    },
    {
      id: 45645,
      name: 'Elis',
      surname: 'Miao',
      age: 5,
      dateOfBirth: '2016-05-08',
      address: {
        city: 'Palermo',
        street: 'Via Palermo 120',
        postalCode: '90100'
      },
      role: Role.admin,
      username: 'ElisMiao',
      profilePhotoUrl: 'https://bit.ly/3zU6iH3',
      gender: Gender.female
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
