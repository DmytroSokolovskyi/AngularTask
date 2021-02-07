import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StarshipsRoutingModule } from './starships-routing.module';
import { StarshipsComponent } from './component/starships/starships.component';
import {StarchipsService} from './services/starchips.service';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [StarshipsComponent],
  imports: [
    CommonModule,
    StarshipsRoutingModule,
    HttpClientModule
  ],
  exports: [StarshipsComponent],
  providers: [StarchipsService]
})
export class StarshipsModule { }
