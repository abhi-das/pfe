import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
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
  subscriptionTest: Subscription;
  subscriptionError: string;
  isLoading: boolean;
  query: string;

  transactionListItm: Observable<TransactionEntry[]>;

  constructor(private trsHistorySrv: TransactionService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.transactionListItm = this.trsHistorySrv.getTransactionHistory().pipe(tap(() => this.isLoading = false));
  }
  filterHistory(event: any) {
    this.query = event.currentTarget.value;
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
