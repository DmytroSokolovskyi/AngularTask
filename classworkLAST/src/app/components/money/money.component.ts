import {Component, Input, OnInit} from '@angular/core';
import {IKyrs} from '../../interface/kyrs.interface';

@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.css']
})
export class MoneyComponent implements OnInit {
  @Input()
  money: IKyrs;

  constructor() { }

  ngOnInit(): void {
  }

}
