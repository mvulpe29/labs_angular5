import {Injectable, InjectionToken, Provider} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

import {IPizza, IReview} from "./pizza.model";
import {PIZZAS} from "./pizza.data";

export interface IPizzaService {
  getPizza(id: string): Observable<IPizza>;

  getPizzas(): Observable<Array<IPizza>>;

  addReview(pizza: IPizza, review: IReview): Observable<IPizza>
}

@Injectable()
export class PizzaFileService implements IPizzaService {

  constructor() {
  }

  getPizza(id: string): Observable<IPizza> {
    return Observable.create(observer => {
      observer.next(PIZZAS.find(pizza => pizza._id === id));
      observer.complete();
    });
  }

  getPizzas(): Observable<Array<IPizza>> {
    return Observable.create(observer => {
      observer.next(PIZZAS);
      observer.complete();
    });
  }

  addReview(pizza: IPizza, review: IReview): Observable<IPizza> {
    return Observable.create(observer => {
      pizza.reviews.push(review);
      observer.next(pizza);
      observer.complete();
    });
  }
}

@Injectable()
export class PizzaRestService implements IPizzaService {

  private url: string = "http://pizza-store.herokuapp.com/api/pizzas";

  constructor(private http: HttpClient) {
  }

  getPizza(id: string): Observable<IPizza> {
    const url: string = this.url + '/' + id;
    return this.http.get<IPizza>(url);
  }

  getPizzas(): Observable<Array<IPizza>> {
    return this.http.get<Array<IPizza>>(this.url);
  }

  addReview(pizza: IPizza, review: IReview): Observable<IPizza> {
    const url: string = this.url + '/addReview/' + pizza._id;
    return this.http.put<IPizza>(url, review);
  }
}

export const PIZZA_SERVICE: InjectionToken<IPizzaService> = new InjectionToken('PIZZA_SERVICE');

export const PizzaServiceProvider: Provider = {
  provide: PIZZA_SERVICE,
  useClass: PizzaRestService
};
