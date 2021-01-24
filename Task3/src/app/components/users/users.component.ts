import {Component, OnInit} from '@angular/core';
import {IUser} from '../models/user.model';
import {users} from '../../data/user';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {


  users: IUser[] = users;

  constructor() {
  }

  ngOnInit(): void {
  }

}
