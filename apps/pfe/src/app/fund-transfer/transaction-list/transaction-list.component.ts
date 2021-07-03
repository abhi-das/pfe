import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { TransactionEntry } from '../../fund-transfer/models';
import { appStore } from '../../store/reducers';
import { transactionSelector } from '../../store/selectors';
import { sortByDesc } from '../../utils/helper';

@Component({
  selector: 'pfe-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TransactionListComponent implements OnInit {
  transactionList: TransactionEntry[];
  isLoading: boolean;
  query: string;

  transactionListItm: Observable<TransactionEntry[]>;

  constructor(private _store: Store<appStore.AppState>) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.transactionListItm = this._store
      .select(transactionSelector.transactionSelectAll)
      .pipe(
        tap((res) => {
          if (res.length) {
            res.sort(sortByDesc);
            this.isLoading = false;
          }
        })
      );
  }
  filterHistory(event: any) {
    this.query = event.currentTarget.value;
  }
}
