import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

import { TransactionService } from './transfer.service';
import { TransactionEntry } from '../models';
import { environment } from 'apps/pfe/src/environments/environment';

describe('TransferService', () => {
  let service: TransactionService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TransactionService],
    });
    service = TestBed.get(TransactionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  // it('Should get transaction histories', () => {
  //   const trans: TransactionEntry[] = [
  //     {
  //       categoryCode: '#12a580',
  //       dates: {
  //         valueDate: 1600493600000,
  //       },
  //       transaction: {
  //         amountCurrency: {
  //           amount: -500,
  //           currencyCode: 'EUR',
  //         },
  //         type: 'Salaries',
  //         creditDebitIndicator: 'CRDT',
  //       },
  //       merchant: {
  //         name: 'Backbase',
  //         accountNumber: 'SI64397745065188826',
  //       },
  //     },
  //     {
  //       categoryCode: '#12a580',
  //       dates: {
  //         valueDate: 1600387200000,
  //       },
  //       transaction: {
  //         amountCurrency: {
  //           amount: 82.02,
  //           currencyCode: 'EUR',
  //         },
  //         type: 'Card Payment',
  //         creditDebitIndicator: 'DBIT',
  //       },
  //       merchant: {
  //         name: 'The Tea Lounge',
  //         accountNumber: 'SI64397745065188826',
  //       },
  //     },
  //   ];

  //   httpMock = TestBed.get(HttpTestingController);
  //   const httpReq = httpMock.expectOne(environment.apiUrl);
  //   expect(httpReq.request.method).toBe('GET');
  //   httpReq.flush(trans);
  //   httpMock.verify();
  // });
});
