import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DataService} from '../../../../services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  someValue: number;


  constructor(private router: Router, private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getDataState().subscribe(value => this.someValue = value);
  }

valueB(): boolean {
 if (this.someValue === 1) {
   return true;
 }
  return false;
}
  gotoPeople(): void {
    this.router.navigate(['people']);
  }

  gotoPlanets(): void {
    this.router.navigate(['planets']);
  }

  gotoStarships(): void {
    this.router.navigate(['starships']);
  }

  gotoAll(): void {
    this.router.navigate(['all']);
  }

  plussValue(): void {
    this.dataService.setNewStatePluss();
  }

  minusValue() {
    this.dataService.setNewState();
  }
}
