import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {IUser} from '../../../models/user.interface';

@Component({
  selector: 'app-fulluser',
  templateUrl: './fulluser.component.html',
  styleUrls: ['./fulluser.component.css']
})
export class FulluserComponent implements OnInit {

  user: IUser;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.activatedRoute.params.subscribe(value => {
      this.user = this.router.getCurrentNavigation().extras.state as IUser;
    });
  }

  ngOnInit(): void {
  }

}

