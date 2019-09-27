import { storiesOf } from '@storybook/react';

import { getAccordionVariants } from './accordion';
import { getButtonVariants, getButtonSizes } from './button';
import { getCardVariants } from './card';
import { getSpinnerVariants } from './spinner';

storiesOf('Accordion', module)
  .add('Variants', getAccordionVariants);

storiesOf('Button', module)
  .add('Variants', getButtonVariants)
  .add('Sizes', getButtonSizes);

storiesOf('Card', module)
  .add('Variants', getCardVariants);

storiesOf('Spinner', module)
  .add('Variants', getSpinnerVariants);



  