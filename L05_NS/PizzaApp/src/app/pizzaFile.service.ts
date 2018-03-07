import {Injectable} from '@angular/core';
import {IPizza} from "./app.model";
import {PIZZAS} from "./app.data";

@Injectable()
export class PizzaFileService {

  constructor() { }

  getPizzas(): Array<IPizza>{
    return PIZZAS;
  }
}
