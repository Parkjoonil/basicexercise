import { Injectable } from '@angular/core';
import { Account } from 'src/app/exercise/account/account.model';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  public accounts: Account[] = [];

  constructor() { }

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
