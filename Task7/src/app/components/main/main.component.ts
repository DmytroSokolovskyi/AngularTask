import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  goToPeople(): void {
   this.router.navigate(['people']);
  }

  goToPlanets(): void  {
    this.router.navigate(['planets']);
  }

  goToStarships(): void  {
    this.router.navigate(['starships']);
  }
}
