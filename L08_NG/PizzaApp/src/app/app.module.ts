import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {APP_ROUTES} from "./app.routes";
import {PreloadSelectedModules} from "./app.preloading";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES, {preloadingStrategy: PreloadSelectedModules})
  ],
  providers: [PreloadSelectedModules],
  bootstrap: [AppComponent]
})
export class AppModule {
}
