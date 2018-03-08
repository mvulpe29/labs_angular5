import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerDetailsComponent} from './customer-details/customer-details.component';
import {CustomerServiceProvider} from "./customer.service";
import {CommonsModule} from "../commons/commons.module";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CommonsModule
  ],
  exports: [
    CustomerListComponent,
    CustomerDetailsComponent
  ],
  declarations: [
    CustomerListComponent,
    CustomerDetailsComponent
  ],
  providers: [CustomerServiceProvider]
})
export class CustomerModule {
}
