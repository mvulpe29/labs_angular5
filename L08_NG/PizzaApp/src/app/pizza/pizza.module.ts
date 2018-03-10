import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

import {CommonsModule} from "../commons/commons.module";
import {TabsComponent} from "./pizza-details/tabs/tabs.component";
import {ExtrasComponent} from "./pizza-details/tabs/extras/extras.component";
import {ReviewsComponent} from "./pizza-details/tabs/reviews/reviews.component";
import {PizzaListComponent} from "./pizza-list/pizza-list.component";
import {IngredientsComponent} from "./pizza-details/tabs/ingredients/ingredients.component";
import {PizzaDetailsComponent} from "./pizza-details/pizza-details.component";
import {PizzaServiceProvider} from "./pizza.service";
import {PIZZA_ROUTES} from "./pizza.routes";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(PIZZA_ROUTES),
    CommonsModule
  ],
  exports: [
    PizzaListComponent,
    PizzaDetailsComponent,
  ],
  declarations: [
    TabsComponent,
    ReviewsComponent,
    IngredientsComponent,
    ExtrasComponent,
    PizzaListComponent,
    PizzaDetailsComponent
  ],
  providers: [PizzaServiceProvider]
})
export class PizzaModule {
}
