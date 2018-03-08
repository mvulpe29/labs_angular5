import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {TabsComponent} from "./pizza-list/pizza-details/tabs/tabs.component";
import {PizzaListComponent} from "./pizza-list/pizza-list.component";
import {ReviewsComponent} from "./pizza-list/pizza-details/tabs/reviews/reviews.component";
import {PizzaServiceProvider} from "./pizza-list/pizza.service";
import {IngredientsComponent} from './pizza-list/pizza-details/tabs/ingredients/ingredients.component';
import {ExtrasComponent} from './pizza-list/pizza-details/tabs/extras/extras.component';
import {PizzaDetailsComponent} from './pizza-list/pizza-details/pizza-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ReviewsComponent,
    PizzaListComponent,
    IngredientsComponent,
    ExtrasComponent,
    PizzaDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PizzaServiceProvider],
  bootstrap: [AppComponent]
})
export class AppModule {
}
