import { Icon } from '../components';
import { options } from '../constants';

export default {
  title: 'Atoms/Icon',
  component: Icon,
  args: {
    name: 'caretDown',
    size: 'md',
    color: 'base',
  },
  argTypes: {
    size: {
      options: options.sizes,
      control: { type: 'select' },
    },
    name: {
      options: options.names,
      control: { type: 'select' },
    },
    color: {
      options: options.colors.concat('yellow'),
      control: { type: 'select' },
    },
  },
};

const Template = (args) => <Icon {...args} />;

export const Default = Template.bind({});
