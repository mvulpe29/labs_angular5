import {Routes} from "@angular/router";

export const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/pizza', pathMatch: 'full'},
  {path: 'customer', loadChildren: './customer/customer.module#CustomerModule'},
  {path: 'pizza', loadChildren: './pizza/pizza.module#PizzaModule', data: {preload: true}}
];
