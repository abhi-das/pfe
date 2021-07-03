import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { LibBbUiModule } from '@pfe-platform/lib-bb-ui';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { RemoveCommaPipe } from '../../common/pipes/remove-comma/remove-comma.pipe';
import { PfeNgxModule } from '../../pfe-ngx/pfe-ngx.module';

import { MoneyTransferComponent } from './money-transfer.component';

describe('MoneyTransferComponent', () => {
  let component: MoneyTransferComponent;
  let fixture: ComponentFixture<MoneyTransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        PfeNgxModule,
        LibBbUiModule,
        HttpClientTestingModule,
      ],
      declarations: [RemoveCommaPipe, MoneyTransferComponent],
      providers: [BsModalRef, BsModalService, FormBuilder],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('On Form submission - Valid', () => {
    component.transferForm.controls['toAccount'].setValue('user name');
    component.transferForm.controls['amount'].setValue('10000');
    component.onTransferFormSubmit();
    expect(component.transferForm.invalid).toBe(false);
  });
  it('On Form submission - Invalid', () => {
    component.transferForm.controls['toAccount'].setValue('');
    component.transferForm.controls['amount'].setValue('10000');
    component.onTransferFormSubmit();
    expect(component.transferForm.valid).toBe(false);
  });

  it('On Form reset - falsy', () => {
    component.transferForm.controls['toAccount'].setValue('user name');
    component.transferForm.controls['amount'].setValue('10000');
    component.transferForm.reset();
    expect(component.transferForm.get('toAccount')?.valid).toBeFalsy();
  });
});
