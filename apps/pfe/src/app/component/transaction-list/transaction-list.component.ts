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
  subscriptionError: string;
  isLoading: boolean;
  query: string;
  constructor(private trsHistorySrv: TransactionService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.subscription = this.trsHistorySrv
      .loadTransferHistory()
      .subscribe(
        (res) => {
          this.isLoading = false;
          this.transactionList = res
        },
        (err) => this.subscriptionError = err
      )
  }
  filterHistory(event: any) {
    // console.log(event.currentTarget.value)
    this.query = event.currentTarget.value;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
