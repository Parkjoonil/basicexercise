import { Component, OnInit } from '@angular/core';
import { Account } from './account.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  accounts: Account[] = [

  ];
  status: string = 'Active';

  constructor() { }

  ngOnInit(): void {
  }

  addAccount(value: Account) {
    let account = value;
    account.status = 'Active';
    this.accounts.push(value);
    console.log(value);
  }

  statusReset(i) {
    if(this.accounts[i].status === 'Active') {
      this.accounts[i].status = 'Inactive';
    } else {
      this.accounts[i].status = 'Active';
    }
    
  }

}
