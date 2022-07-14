import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentComponent } from './exercise/component/component.component';
import { ServerComponent } from './exercise/server/server.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { SuccessComponent } from './exercise/success/success.component';
import { FailureComponent } from './exercise/failure/failure.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './exercise/header/header.component';
import { ShoppingListComponent } from './exercise/shopping-list/shopping-list.component';
import { RecipesComponent } from './exercise/recipes/recipes.component';
import { ShoppingEditComponent } from './exercise/shopping-edit/shopping-edit.component';
import { RecipeDetailComponent } from './exercise/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './exercise/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './exercise/recipe-item/recipe-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    ServerComponent,
    SuccessComponent,
    FailureComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipesComponent,
    ShoppingEditComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HeaderComponent
      },
      {
        path: 'shopping-list',
        component: ShoppingListComponent
      },
      {
        path: 'recipes',
        component: RecipesComponent
      },
      {
        path: 'recipes/recipe-detail',
        component: RecipeDetailComponent
      },
      {
        path: 'recipes/recipe-list',
        component: RecipeListComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
