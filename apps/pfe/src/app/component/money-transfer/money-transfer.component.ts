import { Component, OnInit, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TransactionService } from '../../services/transfer.service';

@Component({
  selector: 'pfe-money-transfer',
  templateUrl: './money-transfer.component.html',
  styleUrls: ['./money-transfer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MoneyTransferComponent implements OnInit {
  modalRef: BsModalRef;
  @ViewChild('modelContent') modelContent: TemplateRef<any>;
  transferForm: FormGroup;
  isTransferFormSubmitted = false;
  accountBalance: number;
  constructor(private modalService: BsModalService, private fb: FormBuilder, private trsHistorySrv: TransactionService) {}

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
    const userTransactionInfo = {
      valueDate: Number(new Date().getTime()),
      amount: Number(this.transferFormFields.amount.value),
      name: this.transferFormFields.toAccount.value
    };
    this.trsHistorySrv.addRecentTransaction(userTransactionInfo);
    this.onReset();
    this.modalRef.hide();
  }
}
