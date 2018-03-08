import {Component, Input, OnInit} from '@angular/core';
import {IPizza} from "../pizza.model";

@Component({
  selector: 'pizza-details',
  templateUrl: './pizza-details.component.html',
  styleUrls: ['./pizza-details.component.css']
})
export class PizzaDetailsComponent implements OnInit {

  @Input()
  private pizza: IPizza;

  constructor() { }

  ngOnInit() {
  }
}
