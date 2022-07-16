import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe(1, '짜장면', '밀가루를 반죽하고, 면을 뽑아, 짜장 소스를...', 'https://as1.ftcdn.net/v2/jpg/05/11/99/54/1000_F_511995450_v0Iv3f5GIsv7X8hjkSHnIqxAzZIeSYZg.jpg'),
    new Recipe(2, '짬뽕', '밀가루를 반죽하고, 면을 뽑아, 짬뽕 국물에...', 'https://t1.daumcdn.net/cfile/tistory/99D4B04E5C5D20A02D')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  showInfo() {
    
  }

}
