import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { LibBbUiModule } from '@pfe-platform/lib-bb-ui';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
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
        LibBbUiModule
      ],
      declarations: [MoneyTransferComponent],
      providers: [BsModalRef, BsModalService]
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
});
