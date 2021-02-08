import {Component, OnInit} from '@angular/core';
import {CarsService} from '../../services';
import {ICar} from '../../models';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  allCars: ICar[];

  constructor(private  carsService: CarsService) {
  }

  ngOnInit(): void {
    this.carsService.getcars().subscribe(value => this.allCars = value);
  }

}
