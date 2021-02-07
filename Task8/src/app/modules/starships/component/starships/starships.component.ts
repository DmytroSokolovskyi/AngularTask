import {Component, OnInit} from '@angular/core';
import {DataService} from '../../../../services/data.service';
import {IStarshipsModel} from '../../../../interfase/starships.model';
import {StarchipsService} from '../../services/starchips.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent implements OnInit {
  someValue: number;
  starChips: IStarshipsModel;

  constructor(private dataService: DataService, private starchipsService: StarchipsService) {
  }

  ngOnInit(): void {
    // this.someValue = this.dataService.getDataState();
    this.dataService.getDataState()
      .subscribe(value => this.starchipsService.getStarChips(value)
        .subscribe(starch => this.starChips = starch));
  }

}
