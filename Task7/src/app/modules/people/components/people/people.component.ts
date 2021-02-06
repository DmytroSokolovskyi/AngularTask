import {Component, OnInit} from '@angular/core';
import {PeopleService} from '../../services/people.service';
import {IPeople} from '../../../../models';


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  peoples: IPeople;
  constructor(private peopleService: PeopleService) {
  }

  ngOnInit(): void {
 this.peopleService.getPeople().subscribe(v => this.peoples = v.results);
  }

}
