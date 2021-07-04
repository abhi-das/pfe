import {
  Component,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TransactionService } from '../../fund-transfer/services/transfer.service';
import { TransferActions } from '../../store/actions';
import { appStore } from '../../store/reducers';

@Component({
  selector: 'pfe-money-transfer',
  templateUrl: './money-transfer.component.html',
  styleUrls: ['./money-transfer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MoneyTransferComponent implements OnInit {
  modalRef: BsModalRef;
  @ViewChild('modelContent') modelContent: TemplateRef<any>;
  transferForm: FormGroup;
  isTransferFormSubmitted = false;
  accountBalance: number;
  constructor(
    private modalService: BsModalService,
    private fb: FormBuilder,
    private trsHistorySrv: TransactionService,
    private _store: Store<appStore.AppState>
  ) {}

  ngOnInit(): void {
    this.accountBalance = 5824.7625;
    this.transferForm = this.fb.group({
      toAccount: new FormControl('', [Validators.required]),
      amount: new FormControl('', [Validators.required]),
    });
  }
  get transferFormFields() {
    return this.transferForm.controls;
  }

  openModal() {
    this.modalRef = this.modalService.show(this.modelContent);
  }
  onTransferFormSubmit() {
    this.isTransferFormSubmitted = true;
    if (!this.transferForm.invalid) {
      this.openModal();
    }
  }
  onReset() {
    this.transferForm.reset();
    this.transferFormFields.toAccount.setValue('');
    this.transferFormFields.amount.setValue('');
  }
  onValidationCheck(formFieldName: string) {
    return (
      this.transferForm.get(formFieldName)?.touched &&
      this.transferForm.get(formFieldName)?.invalid
    );
  }
  onTransferSubmit() {
    const recentTrans = {
      categoryCode: '#d51271',
      dates: {
        valueDate: Number(new Date().getTime()),
      },
      transaction: {
        amountCurrency: {
          amount: Number(this.transferFormFields.amount.value),
          currencyCode: 'EUR',
        },
        type: 'Card Payment',
        creditDebitIndicator: 'DBIT',
      },
      merchant: {
        name: this.transferFormFields.toAccount.value,
        accountNumber: 'SI64397745065188826',
      },
    };

    this._store.dispatch(
      TransferActions.addNewTransaction({ lastTransaction: recentTrans })
    );

    // Dispatch add new transaction to Store
    this.onReset();
    this.modalRef.hide();
  }
}
