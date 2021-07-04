import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { TransactionEntry, Transactions } from '../models';
import { environment } from 'apps/pfe/src/environments/environment';

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
}
