import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipeService } from 'src/app/service/recipe/recipe.service';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {
  
  @Input()
  recipe: Recipe;

  @Output()
  recipeSelected = new EventEmitter();

  message: string;

  
  constructor(
    private recipeService: RecipeService
  ) {

   }

  ngOnInit(): void {
  }

  onClick(id) {
    this.recipeSelected.emit(id);
    
  }

}
