import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/service/account/account.service';
import { Account } from './account.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  accounts: Account[] = [];
  status: string = 'Active';

  constructor(
    private accountService: AccountService
  ) { }

  ngOnInit(
  ): void {
    this.accounts = this.accountService.accounts;
  }

  addAccount(value: Account) {
    this.accountService.addAccount(value);
  }

  statusReset(i) {
    this.accountService.statusReset(i);
  }

}
