// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { storiesOf } from '@storybook/angular';
import { FooterComponent } from './footer.component';

storiesOf('footerComponent', module).add('basic', () => ({
  component: FooterComponent,
}));
