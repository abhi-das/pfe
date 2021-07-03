import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransferComponent } from './transfer/transfer.component';
import { PfeNgxModule } from '../pfe-ngx/pfe-ngx.module';
import { LibBbUiModule } from '@pfe-platform/lib-bb-ui';
import { HttpClientModule } from '@angular/common/http';
import { PipesModule } from '../common/pipes/pipes.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from '../component/loader/loader.component';
import { AmountValidatorDirective } from '../common/directive/amount-validator/amount-validator.directive';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { transactionStore } from '../store/reducers';
import { TransactionService } from './services/transfer.service';
import { MoneyTransferComponent } from './money-transfer/money-transfer.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionListItemComponent } from './transaction-list-item/transaction-list-item.component';
import { TransactionResolverService } from './services/transaction-resolver.service';
import { EffectsModule } from '@ngrx/effects';
import { TransactionEffectServices } from './services/transaction.effects.service';

const fundTransferRouters: Routes = [
  {
    path: '',
    component: TransferComponent,
    resolve: {
      transHistory: TransactionResolverService,
    },
  },
];
@NgModule({
  declarations: [
    TransferComponent,
    MoneyTransferComponent,
    TransactionListComponent,
    TransactionListItemComponent,
    LoaderComponent,
    AmountValidatorDirective,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(fundTransferRouters),
    PfeNgxModule,
    LibBbUiModule,
    HttpClientModule,
    PipesModule,
    ReactiveFormsModule,
    StoreModule.forFeature(
      'transactions',
      transactionStore.transactionReducers
    ),
    EffectsModule.forFeature([TransactionEffectServices]),
  ],
  exports: [TransferComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FundTransferModule {
  static forRoot(): ModuleWithProviders<FundTransferModule> {
    return {
      ngModule: FundTransferModule,
      providers: [TransactionService, TransactionResolverService],
    };
  }
}
