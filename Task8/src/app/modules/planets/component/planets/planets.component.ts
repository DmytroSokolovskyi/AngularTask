import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../../services/data.service';
import {IPlanets} from '../../../../interfase/planets';
import {PlanetsService} from '../../services/planets.service';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {
  someValue: number;
  planet: IPlanets;

  constructor(private dataService: DataService, private planetsService: PlanetsService) {
  }

  ngOnInit(): void {
    this.dataService.getDataState()
      .subscribe(value => this.planetsService.getPlanet(value)
      .subscribe(pl => this.planet = pl));
  }

}
