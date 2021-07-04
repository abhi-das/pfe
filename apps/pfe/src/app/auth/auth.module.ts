import {
  CUSTOM_ELEMENTS_SCHEMA,
  // ModuleWithProviders,
  NgModule,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { authStore } from '../store/reducers';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuardService } from './services/auth.guard.service';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffectService } from './services/auth.effects.service';
import { ProfileComponent } from './profile/profile.component';

const authRoutes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: '',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [LoginComponent, ProfileComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forChild(authRoutes),
    StoreModule.forFeature('auth', authStore.authReducers),
    EffectsModule.forFeature([AuthEffectService]),
  ],
  exports: [LoginComponent],
  providers: [AuthService, AuthGuardService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthModule {
  // static forRoot(): ModuleWithProviders<AuthModule> {
  //   return {
  //     ngModule: AuthModule,
  //     providers: [AuthService, AuthGuardService]
  //   }
  // }
}
