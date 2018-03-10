import {Routes} from "@angular/router";

import {FeatureGuard} from "./app.guards";
import {Feature} from "./auth/auth.model";

export const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/pizza', pathMatch: 'full'},
  {
    path: 'customer',
    canActivate: [FeatureGuard],
    loadChildren: './customer/customer.module#CustomerModule',
    data: {feature: Feature.CUSTOMER}
  },
  {
    path: 'pizza',
    canActivate: [FeatureGuard],
    loadChildren: './pizza/pizza.module#PizzaModule',
    data: {feature: Feature.PIZZA, preload: true}
  }
];
