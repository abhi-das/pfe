import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'pfe-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  @Output() inputChange: EventEmitter<any> = new EventEmitter();

  onInputChange(event: Event): void {
    this.inputChange.emit(event);
  }
}
