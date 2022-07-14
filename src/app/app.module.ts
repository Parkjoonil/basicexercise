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
import { MatTabsModule } from '@angular/material/tabs'
import { SuccessComponent } from './exercise/success/success.component';
import { FailureComponent } from './exercise/failure/failure.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './exercise/header/header.component';
import { ShoppingListComponent } from './exercise/shopping-list/shopping-list.component';
import { RecipesComponent } from './exercise/recipes/recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentComponent,
    ServerComponent,
    SuccessComponent,
    FailureComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipesComponent
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
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
