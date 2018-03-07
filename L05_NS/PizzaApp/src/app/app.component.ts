import {Component, OnInit} from "@angular/core";
import {IPizza} from "./app.model";
import {PizzaRestService} from "./pizza-rest.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private pizzas: Array<IPizza>;

  constructor(private pizzaService: PizzaRestService) {
  }

  ngOnInit(): void {
    this.pizzaService.getPizzas()
      .subscribe(pizzas => this.pizzas = pizzas);
  }
}
