import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.css']
})
export class IngredientsComponent implements OnInit {

  @Input()
  private ingredients: string;

  constructor() {
  }

  ngOnInit() {
  }
}
