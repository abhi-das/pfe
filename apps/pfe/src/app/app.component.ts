import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { AuthActions } from './store/actions';
import { appStore } from './store/reducers';

@Component({
  selector: 'pfe-platform-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // Add HTML Page Title and Meta tags  according to page content
  title = 'Peach Bank - Home';
  constructor(
    private pageTitle: Title,
    private pageMeta: Meta,
    private _store: Store<appStore.AppState>
  ) {
    this.pageTitle.setTitle('Peach Banking Application');
    this.pageMeta.addTag({
      name: 'description',
      content: 'The best banking facility, online banking.',
    });

    // If user has already logged in
    const user = localStorage.getItem('user');
    if (user) {
      const existingUser = JSON.parse(user);
      this._store.dispatch(AuthActions.loginAction({ user: existingUser }));
    }
  }
}
