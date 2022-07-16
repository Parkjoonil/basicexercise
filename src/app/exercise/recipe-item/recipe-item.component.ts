import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss']
})
export class RecipeItemComponent implements OnInit {

  constructor(
    private route: ActivatedRoute
  ) { 
    this.route.paramMap.subscribe(
      res => {
        let id = res.get('id');
        console.log(id);
      }
    )
  }

  ngOnInit(): void {
  }

}
