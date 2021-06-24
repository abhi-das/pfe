import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransactionEntry, Transactions } from '../models/transaction.model';

import { map, catchError, shareReplay, tap } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ErrTemp {
  message: string;
}

@Injectable({
  providedIn: 'root',
})
export class TransactionService {
  private transSubject = new BehaviorSubject<TransactionEntry[]>([]);
  transactions: Observable<TransactionEntry[]> = this.transSubject.asObservable();

  constructor(private http: HttpClient) {
    this.loadTransferHistory().subscribe();
  }

  loadTransferHistory() {
    return this.http
      .get<Transactions>(environment.apiUrl)
      .pipe(
        map((response) => response.data),
        catchError(() => {
          return throwError("Error on loading transaction history!");
        }),
        tap((res: TransactionEntry[]) => this.transSubject.next(res)),
        // shareReplay()
      );
  }
  getTransactionHistory(): Observable<TransactionEntry[]> {
    return this.transactions;
  }
  addRecentTransaction() {

    const recentTra: TransactionEntry = {
      categoryCode: "#12a580",
      dates: {
        valueDate: 1600493600000,
      },
      transaction: {
        amountCurrency: {
          amount: 2324,
          currencyCode: "EUR",
        },
        type: "Salaries",
        creditDebitIndicator: "DEW",
      },
      merchant: {
        name: "Ellet",
        accountNumber: "SI64397745065188826"
      }
    };
    // console.log('get value***',this.transSubject.getValue())
    // const gg: TransactionEntry[] = [
    //   this.transSubject.getValue(),
    //   ...recentTra
    // ];
    this.transSubject.next(this.transSubject.getValue()?.concat(recentTra))
    // console.log(this.getTransactionHistory().subscribe())

  }
}
