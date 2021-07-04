import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { logoutAction } from '../../store/actions/auth.actions';
import { appStore } from '../../store/reducers';
import { authSelector } from '../../store/selectors';

@Component({
  selector: 'pfe-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn: Observable<boolean>;
  isLoggedOut: Observable<boolean>;

  constructor(private store: Store<appStore.AppState>) {}
  ngOnInit() {
    //  Check User Logged in state
    this.isLoggedOut = this.store.pipe(select(authSelector.isLoggedIn));
    this.isLoggedIn = this.store.pipe(select(authSelector.isLoggedOut));
  }

  onSignOut = () => {
    this.store.dispatch(logoutAction());
  };
}
