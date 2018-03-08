import {Component, Inject, OnInit} from '@angular/core';
import {IPizza} from "../pizza.model";
import {INavigationService, NAVIGATION_SERVICE} from "../../common/navigation.service";
import {IPizzaService, PIZZA_SERVICE} from "../pizza.service";
import {ActivatedRoute} from "@angular/router";

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
