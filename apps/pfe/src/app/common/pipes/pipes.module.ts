import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoveCommaPipe } from './remove-comma/remove-comma.pipe';
import { QueryFilterPipe } from './query-filter/query-filter.pipe';

@NgModule({
  declarations: [RemoveCommaPipe, QueryFilterPipe],
  imports: [CommonModule],
  exports: [RemoveCommaPipe, QueryFilterPipe],
})
export class PipesModule {}
