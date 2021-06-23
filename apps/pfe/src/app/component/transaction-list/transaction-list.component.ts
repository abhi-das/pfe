import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { TransactionEntry } from '../../models/transaction.model';
import { TransactionService } from '../../services/transfer.service';

@Component({
  selector: 'pfe-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
})
export class TransactionListComponent implements OnInit, OnDestroy {
  transactionList: TransactionEntry[];
  subscription: Subscription;
  constructor(private trsHistorySrv: TransactionService) {}

  ngOnInit(): void {
    this.subscription = this.trsHistorySrv
      .loadTransferHistory()
      .subscribe((res) => {
        this.transactionList = res;
      });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
