import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import {UserService} from './services/user.service';
import {HttpClientModule} from '@angular/common/http';
import { FulluserComponent } from './components/fulluser/fulluser.component';


@NgModule({
  declarations: [UsersComponent, UserComponent, FulluserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule
  ],
  exports: [HttpClientModule],
  providers: [UserService]
})
export class UserModule { }
