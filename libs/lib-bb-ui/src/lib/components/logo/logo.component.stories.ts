// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { storiesOf } from '@storybook/angular';
import { LogoComponent } from './logo.component';

storiesOf('logoComponent', module).add('basic', () => ({
  component: LogoComponent,
}));
