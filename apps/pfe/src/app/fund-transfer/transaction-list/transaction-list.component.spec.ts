import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LibBbUiModule } from '@pfe-platform/lib-bb-ui';
import { QueryFilterPipe } from '../../common/pipes/query-filter/query-filter.pipe';
import { PfeNgxModule } from '../../pfe-ngx/pfe-ngx.module';
import { appStore, transactionStore } from '../../store/reducers';
import { TransactionEffectServices } from '../services/transaction.effects.service';

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
        HttpClientModule,
        StoreModule.forRoot(appStore.appReducer),
        StoreModule.forFeature(
          'transactions',
          transactionStore.transactionReducers
        ),
        EffectsModule.forRoot([]),
        EffectsModule.forFeature([TransactionEffectServices]),
      ],
      declarations: [QueryFilterPipe, TransactionListComponent],
      providers: [],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
