import {inject, TestBed} from '@angular/core/testing';
import {Injectable} from "@angular/core";
import {ActivatedRoute} from "@angular/router";

import {INavigationService, NAVIGATION_SERVICE} from './navigation.service';


@Injectable()
export class NavigationServiceMock implements INavigationService {

  openPizza(id: string): Promise<boolean> {
    return Promise.resolve(true);
  }

  openPizzas(): Promise<boolean> {
    return Promise.resolve(true);
  }

  openCustomer(id: string): Promise<boolean> {
    return Promise.resolve(true);
  }

  openCustomers(): Promise<boolean> {
    return Promise.resolve(true);
  }

  getParam(activatedRoute: ActivatedRoute, paramName: string): string {
    return '1234';
  }
}

describe('NavigationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: NAVIGATION_SERVICE, useClass: NavigationServiceMock}]
    });
  });

  it('should be created', inject([NAVIGATION_SERVICE], (service: INavigationService) => {
    expect(service).toBeTruthy();
  }));
});
