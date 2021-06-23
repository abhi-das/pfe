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
  transactionHist: TransactionEntry[];
  subscription: Subscription;
  transferDate: number;
  constructor(private trsHistorySrv: TransactionService) {}

  ngOnInit(): void {
    this.subscription = this.trsHistorySrv
      .loadTransferHistory()
      .subscribe((res) => {
        this.transactionHist = res;
      });
    this.transferDate = 1600493600000;
  }

  isBalanceBelowZero(amount: number): boolean {
    return amount < 0;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
