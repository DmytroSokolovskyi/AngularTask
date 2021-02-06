import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {IUser} from './models/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // user = [{name: 'Nekto', age: 11, status: true}];
//   checkForm(myForm: HTMLFormElement): void {
// console.log(myForm);
//   }
//   users = [];
//
//
//   name = new FormControl('', [Validators.required, Validators.minLength(10)]);
//   age = new FormControl();
//   status = new FormControl();
//
//   myForm = new FormGroup({
//     name: this.name,
//     age: this.age,
//     status: this.status
//   });
//
//
//   pushUser(): void {
//     console.log(this.myForm.value);
//     this.users.push(this.myForm.value);
//   }
}
