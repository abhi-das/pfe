import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'pfe-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss'],
})
export class TransferComponent implements OnInit {
  constructor(private pageTitle: Title, private pageMeta: Meta) {
    this.pageTitle.setTitle('Transfer Fund');
    this.pageMeta.addTag({
      name: 'description',
      content: 'The best banking facility, Transfer Fund.',
    });
  }

  ngOnInit(): void {}
}
