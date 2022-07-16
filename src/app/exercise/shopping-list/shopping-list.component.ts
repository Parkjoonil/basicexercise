import { Component, OnInit } from '@angular/core';
import { Ingredient } from './ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('밀가루', 5),
    new Ingredient('짜장소스', 10),
    new Ingredient('양파', 5),
    new Ingredient('돼지고기', 5),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
