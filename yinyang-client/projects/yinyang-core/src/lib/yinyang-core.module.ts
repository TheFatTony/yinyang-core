import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import {NgxLoadingModule} from 'ngx-loading';


import {LoadingComponent} from './_directives/loading/loading.component';
import {AlertComponent} from './_directives/alert/alert.component';
import {AlertService} from './_services/alert.service';

@NgModule({
  declarations: [
    AlertComponent,
    LoadingComponent],
  imports: [
    CommonModule,
    NgxLoadingModule.forRoot({})
  ],
  providers: [AlertService],
  exports: [
    AlertComponent,
    LoadingComponent]
})
export class YinyangCoreModule { }
