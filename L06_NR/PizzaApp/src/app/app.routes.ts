import {Routes} from "@angular/router";
import {PIZZA_ROUTES} from "./pizza/pizza.routes";

export const APP_ROUTES: Routes = [
  {path: '', redirectTo: '/pizza', pathMatch: 'full'},
  {path: 'pizza', children: PIZZA_ROUTES}
];
