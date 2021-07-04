import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { AuthModule } from './auth/auth.module';
import { AuthGuardService } from './auth/services/auth.guard.service';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { appStore } from './store/reducers';

const routes: Routes = [
  // {
  //   path: 'auth',
  //   loadChildren: () =>
  //     import('./auth/auth.module').then((mod) => mod.AuthModule),
  // },
  {
    path: 'transfer',
    loadChildren: () =>
      import('./fund-transfer/fund-transfer.module').then(
        (mod) => mod.FundTransferModule
      ),
    canActivate: [AuthGuardService],
  },
  {
    path: '404',
    component: PageNotFoundComponent,
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  declarations: [AppComponent, HeaderComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(routes, { enableTracing: false }),
    BrowserModule,
    AuthModule.forRoot(),
    StoreModule.forRoot(appStore.appReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    EffectsModule.forRoot([]),
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
