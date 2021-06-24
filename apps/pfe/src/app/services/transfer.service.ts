import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TransactionEntry, Transactions } from '../models/transaction.model';

<<<<<<< HEAD
import { map, catchError, tap } from 'rxjs/operators';
=======
import { map, catchError, shareReplay, tap } from 'rxjs/operators';
>>>>>>> 58c771d560f6ba46ea0a5b17d8af8433470dc3cc
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
  addRecentTransaction(rTransaction: Partial<TransactionEntry>) {
    const recentTra: TransactionEntry = {
      ...this.transSubject.getValue()[0],
      ...rTransaction
    };
    this.transSubject.next(this.transSubject.getValue()?.concat(recentTra));
  }
}
