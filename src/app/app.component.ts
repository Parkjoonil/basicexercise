import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'basicexercise';
  myButtonProperty: boolean = false;

  myMethod() {
    return '홍길동';
  }

}
