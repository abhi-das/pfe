import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { LibBbUiModule } from '@pfe-platform/lib-bb-ui';
import { QueryFilterPipe } from '../../common/pipes/query-filter/query-filter.pipe';
import { PfeNgxModule } from '../../pfe-ngx/pfe-ngx.module';
import { TransactionService } from '../../services/transfer.service';

import { TransactionListComponent } from './transaction-list.component';

describe('TransactionListComponent', () => {
  let component: TransactionListComponent;
  let fixture: ComponentFixture<TransactionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        PfeNgxModule,
        LibBbUiModule,
        HttpClientModule
      ],
      declarations: [QueryFilterPipe, TransactionListComponent],
      providers: [TransactionService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
