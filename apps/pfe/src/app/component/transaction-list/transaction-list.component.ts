import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TransactionEntry } from '../../models/transaction.model';
import { TransactionService } from '../../services/transfer.service';
import { sortByDesc } from '../../utils/helper';

@Component({
  selector: 'pfe-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TransactionListComponent implements OnInit {
  transactionList: TransactionEntry[];
  isLoading: boolean;
  query: string;

  transactionListItm: Observable<TransactionEntry[]>;

  constructor(private trsHistorySrv: TransactionService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.transactionListItm = this.trsHistorySrv.getTransactionHistory()
    .pipe(
      tap((res) => {
        if(res.length) {
          res.sort(sortByDesc)
        }
        this.isLoading = false;
      })
    )
  }
  filterHistory(event: any) {
    this.query = event.currentTarget.value;
  }
}
