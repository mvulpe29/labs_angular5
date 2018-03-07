import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import {AppComponent} from './app.component';
import {TabsComponent} from "./tabs/tabs.component";
import {ReviewsComponent} from "./reviews/reviews.component";
import {PizzaFileService} from "./pizza-file.service";
import {PizzaRestService} from "./pizza-rest.service";

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PizzaFileService, PizzaRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
