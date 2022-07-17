import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'basicexercise';
  mySuccessButtonProperty: boolean = false;
  myFailureButtonProperty: boolean = false;
  inputName: string = 'asdasddd';

  routeLinks: any;
  activeLinkIndex: number = 0;

  constructor(
    private router: RouterModule
  ) {
    this.routeLinks = [
      { label: 'Shopping-List', link: 'shopping-list' },
      { label: 'Recipes', link: 'recipes'},
      { label: 'Account', link: 'account'},
    ]
  }

  callSomething() {
    console.log("I'm your father");
    
  }

  onKeyUp(event: any) {
    this.inputName = event.target.value;
  }

}
