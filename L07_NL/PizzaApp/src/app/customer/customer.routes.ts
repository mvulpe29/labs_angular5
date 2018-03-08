import {Routes} from "@angular/router";

import {CustomerListComponent} from "./customer-list/customer-list.component";
import {CustomerDetailsComponent} from "./customer-details/customer-details.component";

export const CUSTOMER_ROUTES: Routes = [
  {path: '', component: CustomerListComponent},
  {path: ':id', component: CustomerDetailsComponent}
];
