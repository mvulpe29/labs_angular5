import {Injectable, InjectionToken, Provider} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

import {IPizza} from "./pizza.model";
import {PIZZAS} from "./pizza.data";

export interface IPizzaService{
  getPizzas(): Observable<Array<IPizza>>;
}

@Injectable()
export class PizzaFileService implements IPizzaService {

  constructor() {
  }

  getPizzas(): Observable<Array<IPizza>> {
    return Observable.create(observer => {
      observer.next(PIZZAS);
      observer.complete();
    });
  }
}

@Injectable()
export class PizzaRestService implements IPizzaService {

  private url: string = "http://pizza-store.herokuapp.com/api/pizzas";

  constructor(private http: HttpClient) {
  }

  getPizzas(): Observable<Array<IPizza>> {
    return this.http.get<Array<IPizza>>(this.url);
  }
}

export const PIZZA_SERVICE: InjectionToken<IPizzaService> = new InjectionToken('PIZZA_SERVICE');

export const PizzaServiceProvider: Provider = {
  provide: PIZZA_SERVICE,
  useClass: PizzaRestService
};
