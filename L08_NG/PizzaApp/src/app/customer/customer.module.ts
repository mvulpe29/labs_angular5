import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from "@angular/router";

import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerDetailsComponent} from './customer-details/customer-details.component';
import {CustomerServiceProvider} from "./customer.service";
import {CommonsModule} from "../commons/commons.module";
import {CUSTOMER_ROUTES} from "./customer.routes";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CUSTOMER_ROUTES),
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
