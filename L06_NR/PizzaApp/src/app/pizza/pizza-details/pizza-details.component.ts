import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import {IPizza} from "../pizza.model";
import {IPizzaService, PIZZA_SERVICE} from "../pizza.service";
import {INavigationService, NAVIGATION_SERVICE} from "../../commons/navigation.service";

@Component({
  selector: 'pizza-details',
  templateUrl: './pizza-details.component.html',
  styleUrls: ['./pizza-details.component.css']
})
export class PizzaDetailsComponent implements OnInit {

  private pizza: IPizza;

  constructor(@Inject(PIZZA_SERVICE) private pizzaService: IPizzaService,
              @Inject(NAVIGATION_SERVICE) private navigationService: INavigationService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.pizzaService.getPizza(this.navigationService.getParam(this.activatedRoute, 'id'))
      .subscribe(pizza => this.pizza = pizza);
  }

  goBack(): Promise<boolean> {
    return this.navigationService.openPizzas();
  }
}
