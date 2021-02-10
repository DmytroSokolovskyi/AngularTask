import {Component, OnInit} from '@angular/core';
import {KyrsService} from '../../services';
import {IKyrs} from '../../interface/kyrs.interface';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  moneyKyrs: IKyrs;
  date = new Date();

  constructor(private kyrsService: KyrsService, private datePipe: DatePipe) {
  }

  ngOnInit(): void {
    const transform = this.datePipe.transform(this.date, 'yyyyMMdd');
    this.kyrsService
      .getKyrsbyDay(transform).subscribe(value => this.moneyKyrs = value);
  }

  dayminus(): void {
    this.date = new Date(this.date.setDate(this.date.getDate() - 1));
    this.ngOnInit();
  }
}
