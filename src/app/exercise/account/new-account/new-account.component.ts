import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.scss']
})
export class NewAccountComponent implements OnInit {

  @Output()
  newAccount = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(value) {
    this.newAccount.emit(value);
  }

}
