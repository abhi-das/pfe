import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { noop } from 'rxjs';
import { tap } from 'rxjs/operators/tap';

import { loginAction } from '../../store/actions/auth.actions';
import { appStore } from '../../store/reducers';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'pfe-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  errorRes: string;
  loginForm: FormGroup;
  isLoading = false;
  constructor(
    private pageTitle: Title,
    private pageMeta: Meta,
    private fb: FormBuilder,
    private router: Router,
    private authServ: AuthService,
    private store: Store<appStore.AppState>
  ) {
    this.pageTitle.setTitle('Banking Application Login');
    this.pageMeta.addTag({
      name: 'description',
      content: 'The best banking facility, online banking login.',
    });
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required]),
    });
  }
  get loginFormField() {
    return this.loginForm.controls;
  }
  onLoginSubmit() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      this.authServ
        .login(this.loginFormField.email.value)
        .pipe(
          tap((res) => {
            if (res.message) {
              this.errorRes = res.message;
            } else {
              this.store.dispatch(loginAction({ user: res }));
              this.router.navigateByUrl('/transfer');
            }
            this.isLoading = false;
          })
        )
        .subscribe(noop, () => {
          console.log('Login fail');
          this.isLoading = false;
        });
    }
  }
}
