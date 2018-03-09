import {Routes} from "@angular/router";

import {PizzaListComponent} from "./pizza-list/pizza-list.component";
import {PizzaDetailsComponent} from "./pizza-details/pizza-details.component";

export const PIZZA_ROUTES: Routes = [
  {path: '', component: PizzaListComponent},
  {path: ':id', component: PizzaDetailsComponent}
];
