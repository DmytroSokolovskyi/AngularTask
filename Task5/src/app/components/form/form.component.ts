import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  users = [];


  name = new FormControl('', [Validators.required, Validators.minLength(5)]);
  age = new FormControl();
  status = new FormControl();

  myForm = new FormGroup({
    name: this.name,
    age: this.age,
    status: this.status
  });


  pushUser(): void {
    console.log(this.myForm.value);
    this.users.push(this.myForm.value);
    console.log(this.users);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
