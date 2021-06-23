import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [],
  imports: [CommonModule, ButtonsModule.forRoot(), ModalModule.forRoot()],
  providers: [BsModalService],
})
export class PfeNgxModule {}
