import {Injectable, InjectionToken, Provider} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

export interface INavigationService {
  openPizza(id: string): Promise<boolean>;

  openPizzas(): Promise<boolean>;

  getParam(activatedRoute, paramName: string): string;
}

@Injectable()
export class NavigationService implements INavigationService {

  constructor(private router: Router) {
  }

  openPizza(id: string): Promise<boolean> {
    return this.router.navigate(['pizza', id]);
  }

  openPizzas(): Promise<boolean> {
    return this.router.navigate(['pizza']);
  }

  getParam(activatedRoute: ActivatedRoute, paramName: string): string {
    return activatedRoute.snapshot.params[paramName];
  }
}

export const NAVIGATION_SERVICE: InjectionToken<INavigationService> = new InjectionToken('NAVIGATION_SERVICE');

export const NavigationServiceProvider: Provider = {
  provide: NAVIGATION_SERVICE,
  useClass: NavigationService
};
