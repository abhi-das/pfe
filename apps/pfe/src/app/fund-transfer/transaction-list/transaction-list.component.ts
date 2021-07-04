import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { combineLatest, Observable, of, Subscription } from 'rxjs';
import { map, tap } from 'rxjs/operators';
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
  isListLoading: boolean;
  query: string;

  transactionListItm: Observable<TransactionEntry[]>;
  apiError: Observable<string | undefined>;
  comLs: Subscription;

  constructor(private _store: Store<appStore.AppState>) {}

  ngOnInit(): void {
    this.isListLoading = true;
    this.transactionListItm = this._store
      .select(transactionSelector.transactionSelectAll)
      .pipe(
        tap((res) => {
          if (res.length) {
            res.sort(sortByDesc);
            this.isListLoading = false;
          }
        })
      );
    this.apiError = this._store.select(transactionSelector.hasTransError);
    // this.comLs = combineLatest([this.transactionListItm, this.apiError]).subscribe((res) => {
    //   if(res[1] !== "") {
    //     this.simpleErr = res[1];
    //   }
    //   this.isListLoading = false
    // })
  }
  filterHistory(event: any) {
    this.query = event.currentTarget.value;
  }
}
