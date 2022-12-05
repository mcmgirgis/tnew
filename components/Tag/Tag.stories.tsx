import { ComponentMeta, ComponentStory } from '@storybook/react';

import Tag from './Tag';

export default {
  title: 'Components/Tag',
  component: Tag,
  argTypes: {
    label: {
      control: 'text',
    },
    variant: {
      control: 'select',
      options: ['bordered-white', 'bordered-black', 'blue', 'borderless'],
    },
  },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Tag Test',
};
