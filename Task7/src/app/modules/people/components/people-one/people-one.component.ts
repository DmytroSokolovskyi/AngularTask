import {Component, Input, OnInit} from '@angular/core';
import {IPeople} from '../../../../models';

@Component({
  selector: 'app-people-one',
  templateUrl: './people-one.component.html',
  styleUrls: ['./people-one.component.css']
})
export class PeopleOneComponent implements OnInit {
  @Input()
  peoplone: IPeople;
  today = new Date();

  constructor() {
  }

  ngOnInit(): void {
  }

}
