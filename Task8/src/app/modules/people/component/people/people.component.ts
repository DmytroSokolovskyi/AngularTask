import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../../services/data.service';
import {PeopleService} from '../../services/people.service';
import {IPeople} from '../../../../interfase';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  someValue: number;
  peoples: IPeople;
  constructor(private dataService: DataService, private peopleService: PeopleService) {
  }

  ngOnInit(): void {
    this.dataService.getDataState()
      .subscribe(value => this.peopleService.getpeople(value)
        .subscribe(p => this.peoples = p));
    // this.peopleService.getpeople().subscribe(value => console.log(value));
  }


}
