import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LibBbUiModule } from '@pfe-platform/lib-bb-ui';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { PfeNgxModule } from './pfe-ngx/pfe-ngx.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './component/header/header.component';
import { MoneyTransferComponent } from './component/money-transfer/money-transfer.component';
import { TransactionListComponent } from './component/transaction-list/transaction-list.component';
import { TransactionService } from './services/transfer.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoneyTransferComponent,
    TransactionListComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    PfeNgxModule,
    LibBbUiModule,
    HttpClientModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' }),
  ],
  providers: [TransactionService],
  bootstrap: [AppComponent],
})
export class AppModule {}
