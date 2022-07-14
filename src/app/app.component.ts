import { Component } from '@angular/core';

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


  myMethod() {
    return '홍길동';
  }

  onSuccessClick() {
    this.mySuccessButtonProperty = !this.mySuccessButtonProperty;
  }

  onFailureClick() {
    this.myFailureButtonProperty = !this.myFailureButtonProperty;
  }

  callSomething() {
    console.log("I'm your father");
    
  }

  onKeyUp(event: any) {
    this.inputName = event.target.value;
  }

}
