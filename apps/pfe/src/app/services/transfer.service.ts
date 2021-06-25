import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransactionEntry, Transactions } from '../models/transaction.model';
import { map, catchError, tap } from 'rxjs/operators';
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
    const options = {
      headers: {
        'Content-Type':  'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,POST,DELETE,PUT,PATCH,OPTIONS",
        "Access-Control-Allow-Headers": "Origin,ConTent-Type,X-Auth-Token,Accept,Access-Control-Request-Method"
      }
    }
    return this.http
      .get<Transactions>(environment.apiUrl, options)
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
  addRecentTransaction(rTransaction: Partial<TransactionEntry>) {
    const recentTra: TransactionEntry = {
      ...this.transSubject.getValue()[0],
      ...rTransaction
    };
    this.transSubject.next(this.transSubject.getValue()?.concat(recentTra));
  }
}
