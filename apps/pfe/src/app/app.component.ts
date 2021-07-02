import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'pfe-platform-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // Add HTML Page Title and Meta tags  according to page content
  title = 'Peach Bank - Home';
  constructor(private pageTitle: Title, private pageMeta: Meta) {
    this.pageTitle.setTitle('Peach Banking Application');
    this.pageMeta.addTag({
      name: 'description',
      content: 'The best banking facility, online banking.',
    });
  }
}
