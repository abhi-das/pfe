import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './component/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { PfeNgxModule } from './pfe-ngx/pfe-ngx.module';
import { LibBbUiModule } from '@pfe-platform/lib-bb-ui';
import { AmountValidatorDirective } from './common/directive/amount-validator/amount-validator.directive';
import { RemoveCommaPipe } from './common/pipes/remove-comma/remove-comma.pipe';
import { PipesModule } from './common/pipes/pipes.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AuthModule } from './auth/auth.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { appStore } from './store/reducers';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PfeNgxModule,
        CommonModule,
        RouterTestingModule,
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        LibBbUiModule,
        PipesModule,
        AuthModule.forRoot(),
        StoreModule.forRoot(appStore.appReducer),
        StoreDevtoolsModule.instrument({
          maxAge: 25,
          logOnly: environment.production,
        }),
        EffectsModule.forRoot([]),
      ],
      declarations: [
        AppComponent,
        HeaderComponent,
        AmountValidatorDirective,
        RemoveCommaPipe,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
// describe('AppComponent', () => {
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [
//         CommonModule,
//         RouterTestingModule,
//         BrowserModule,
//         ReactiveFormsModule,
//         HttpClientModule
//       ],
//       declarations: [AppComponent,
//         TransactionListComponent],
//       providers: [TransactionService]
//     }).compileComponents();
//   });

//   it('should create the app', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app).toBeTruthy();
//   });

//   it(`should have as title 'Peach Bank - Home'`, () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.componentInstance;
//     expect(app.title).toEqual('Peach Bank - Home');
//   });

//   // it('should render title', () => {
//   //   const fixture = TestBed.createComponent(AppComponent);
//   //   fixture.detectChanges();
//   //   const compiled = fixture.nativeElement;
//   //   expect(compiled.querySelector('h1').textContent).toContain(
//   //     'Welcome to pfe!'
//   //   );
//   // });
// });
