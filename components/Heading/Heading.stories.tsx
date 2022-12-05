import { ComponentMeta, ComponentStory } from '@storybook/react';

import Heading from './Heading';

export default {
  title: 'Components/Heading',
  component: Heading,
  argTypes: {
    label: {
      control: 'text',
    },
    variant: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5'],
    },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Test',
  variant: 'h5',
};
