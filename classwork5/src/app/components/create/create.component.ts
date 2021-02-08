import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
import {CarsService} from '../../services';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  id = new FormControl();
  brand = new FormControl();
  model = new FormControl();
  year = new FormControl();

  myForm = new FormGroup({
    id: this.id,
    brand: this.brand,
    model: this.model,
    year: this.year,
  });

  constructor(private carsService: CarsService, private router: Router) {
  }

  createCar(): void {
    this.carsService.createcars(this.myForm.value).subscribe(value => console.log(value));
    this.router.navigate(['cars']);
  }

  ngOnInit(): void {
  }

}
