import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pfe-submit-button',
  templateUrl: './submit-button.component.html',
  styleUrls: ['./submit-button.component.scss'],
})
export class SubmitButtonComponent {
  @Output() submitForm: EventEmitter<any> = new EventEmitter();

  triggerSubmit(event: Event): void {
    this.submitForm.emit(event);
  }
}
