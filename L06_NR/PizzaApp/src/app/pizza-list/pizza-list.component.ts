import {Component, Inject, OnInit} from '@angular/core';
import {IPizza} from "./pizza.model";
import {IPizzaService, PIZZA_SERVICE} from "./pizza.service";

@Component({
  selector: 'pizza-list',
  templateUrl: './pizza-list.component.html',
  styleUrls: ['./pizza-list.component.css']
})
export class PizzaListComponent implements OnInit {

  private pizzas: Array<IPizza>;

  constructor(@Inject(PIZZA_SERVICE) private pizzaService: IPizzaService) {
  }

  ngOnInit(): void {
    this.pizzaService.getPizzas()
      .subscribe(pizzas => this.pizzas = pizzas);
  }

}
