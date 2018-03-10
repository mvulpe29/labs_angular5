import {Inject, Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import "rxjs/add/operator/map";

import {AUTH_SERVICE, IAuthService} from "./auth/auth.service";
import {Feature} from "./auth/auth.model";

@Injectable()
export class FeatureGuard implements CanActivate {
  constructor(@Inject(AUTH_SERVICE) private authService: IAuthService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.getAuthorization()
      .map(auth => {
        if (route.data.feature === Feature.CUSTOMER && auth.customerFeatureEnabled) {
          return true;
        }
        if (route.data.feature === Feature.PIZZA && auth.pizzaFeatureEnabled) {
          return true;
        }

        this.router.navigate(['/']);
        return false;
      });
  }
}
