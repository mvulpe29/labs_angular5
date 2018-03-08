import {Routes} from "@angular/router";

import {PIZZA_ROUTES} from "./pizza/pizza.routes";
import {CUSTOMER_ROUTES} from "./customer/customer.routes";

export const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/pizza', pathMatch: 'full'},
  {path: 'pizza', children: PIZZA_ROUTES},
  {path: 'customer', children: CUSTOMER_ROUTES}
];
