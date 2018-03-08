import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";

import {AppComponent} from './app.component';
import {ReviewsComponent} from "./pizza/pizza-details/tabs/reviews/reviews.component";
import {PizzaListComponent} from "./pizza/pizza-list/pizza-list.component";
import {IngredientsComponent} from "./pizza/pizza-details/tabs/ingredients/ingredients.component";
import {ExtrasComponent} from "./pizza/pizza-details/tabs/extras/extras.component";
import {PizzaDetailsComponent} from "./pizza/pizza-details/pizza-details.component";
import {TabsComponent} from "./pizza/pizza-details/tabs/tabs.component";
import {PizzaServiceProvider} from "./pizza/pizza.service";
import {NavigationServiceProvider} from "./commons/navigation.service";
import {APP_ROUTES} from "./app.routes";

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
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [NavigationServiceProvider, PizzaServiceProvider],
  bootstrap: [AppComponent]
})
export class AppModule {
}
