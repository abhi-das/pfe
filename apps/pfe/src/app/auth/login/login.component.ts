import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
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
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authServ: AuthService,
    private store: Store<appStore.AppState>
  ) {}

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
          })
        )
        .subscribe(noop, () => console.log('Login fail'));
    }
  }
}
