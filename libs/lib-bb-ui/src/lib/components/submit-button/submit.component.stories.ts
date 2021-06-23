// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { storiesOf } from '@storybook/angular';
import { SubmitButtonComponent } from './submit-button.component';

storiesOf('SubmitButtonComponent', module).add('basic', () => ({
  component: SubmitButtonComponent,
}));
