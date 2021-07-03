import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { TransactionEntry, Transactions } from '../models';
import { environment } from 'apps/pfe/src/environments/environment';
import { sortByDesc } from '../../utils/helper';

export interface ErrTemp {
  message: string;
}

export interface UserTransactionInfo {
  valueDate: number;
  amount: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private transSubject = new BehaviorSubject<TransactionEntry[]>([]);
  transactions: Observable<
    TransactionEntry[]
  > = this.transSubject.asObservable();
  headers = new HttpHeaders().set(
    'Content-Type',
    'application/json; charset=UTF-8'
  );

  constructor(private http: HttpClient) {}

  loadTransHistory(): Observable<TransactionEntry[]> {
    return this.http
      .get<Transactions>(environment.apiUrl, { headers: this.headers })
      .pipe(
        map((res) => res.data),
        catchError(() => {
          return throwError('Error on loading transaction history!');
        })
      );
  }

  createTransaction(transInfo: UserTransactionInfo): TransactionEntry {
    return {
      categoryCode: '#d51271',
      dates: {
        valueDate: transInfo.valueDate,
      },
      transaction: {
        amountCurrency: {
          amount: transInfo.amount,
          currencyCode: 'EUR',
        },
        type: 'Card Payment',
        creditDebitIndicator: 'DBIT',
      },
      merchant: {
        name: transInfo.name,
        accountNumber: 'SI64397745065188826',
      },
    };
  }
  addRecentTransaction(userTransactionInfo: UserTransactionInfo) {
    const newCopy = [
      ...this.transSubject.getValue(),
      this.createTransaction(userTransactionInfo),
    ].sort(sortByDesc);
    this.transSubject.next(newCopy);
  }
}
