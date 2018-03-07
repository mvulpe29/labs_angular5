import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";

import {IPizza} from "./app.model";
import {PIZZAS} from "./app.data";

@Injectable()
export class PizzaFileService {

  constructor() {
  }

  getPizzas(): Observable<Array<IPizza>> {
    return Observable.create(observer => {
      observer.next(PIZZAS);
      observer.complete();
    });
  }
}
