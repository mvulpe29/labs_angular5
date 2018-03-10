import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import {APP_ROUTES} from "./app.routes";
import {PreloadSelectedModules} from "./app.preloading";
import {AuthModule} from "./auth/auth.module";
import {FeatureGuard} from "./app.guards";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES, {preloadingStrategy: PreloadSelectedModules}),
    AuthModule
  ],
  providers: [PreloadSelectedModules, FeatureGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
