import {Component, Inject, OnInit} from '@angular/core';

import {IPizza} from "../pizza.model";
import {IPizzaService, PIZZA_SERVICE} from "../pizza.service";
import {INavigationService, NAVIGATION_SERVICE} from "../../commons/navigation.service";

@Component({
  selector: 'pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {

  private pizzas: Array<IPizza>;

  constructor(@Inject(PIZZA_SERVICE) private pizzaService: IPizzaService,
              @Inject(NAVIGATION_SERVICE) private navigationService: INavigationService) {
  }

  ngOnInit(): void {
    this.pizzaService.getPizzas()
      .subscribe(pizzas => this.pizzas = pizzas);
  }

  goToPizza(pizza: IPizza): Promise<boolean> {
    return this.navigationService.openPizza(pizza._id);
  }
}
