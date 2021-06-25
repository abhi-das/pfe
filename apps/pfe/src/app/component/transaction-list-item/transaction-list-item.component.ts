import { Component, Input, ViewEncapsulation } from '@angular/core';
import { TransactionEntry } from '../../models/transaction.model';

@Component({
  selector: 'pfe-transaction-list-item',
  templateUrl: './transaction-list-item.component.html',
  styleUrls: ['./transaction-list-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TransactionListItemComponent {

  @Input() transactionItem: Array<TransactionEntry>
  isBalanceBelowZero(amount: number): boolean {
    return amount < 0;
  }
}
