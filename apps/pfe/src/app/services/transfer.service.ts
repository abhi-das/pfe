import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransactionEntry, Transactions } from '../models/transaction.model';

import { map, catchError, shareReplay } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  // private transSubject = new BehaviorSubject<TransactionEntry[]>([]);
  // transactions: Observable<TransactionEntry[]> = this.transSubject.asObservable();

  constructor(private http: HttpClient) {}

  loadTransferHistory(): Observable<TransactionEntry[]> {
    return this.http
      .get<Transactions>('./assets/mock-data/transactions.json')
      .pipe(
        map((response) => response.data),
        catchError((err) => {
          return throwError(err);
        }),
        shareReplay()
      );
  }
}
