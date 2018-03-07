import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {TabsComponent} from "./tabs/tabs.component";
import {ReviewsComponent} from "./reviews/reviews.component";
import {PizzaFileService} from "./pizzaFile.service";

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [PizzaFileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
