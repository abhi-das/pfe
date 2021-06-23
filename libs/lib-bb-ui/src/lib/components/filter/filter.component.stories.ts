// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { storiesOf } from '@storybook/angular';
import { FilterComponent } from './filter.component';

storiesOf('filterComponent', module).add('basic', () => ({
  component: FilterComponent,
}));
