import { ComponentMeta, ComponentStory } from '@storybook/react';

import PromoBanner from './PromoBanner';

export default {
  title: 'Components/PromoBanner',
  component: PromoBanner,
  argTypes: {
    paddless: {
      control: 'select',
      options: [false, true],
    },
  },
} as ComponentMeta<typeof PromoBanner>;

const Template: ComponentStory<typeof PromoBanner> = (args) => (
  <PromoBanner {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: 'Promotional Title Breaking on Two or More Lines',
  tags: ['Tag Test'],
  description: 'Description test',
  backgroundImage:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Armor_room_-_Cleveland_Museum_of_Art_-_DSC08980.JPG/1024px-Armor_room_-_Cleveland_Museum_of_Art_-_DSC08980.JPG',
  cta: {
    label: 'CTA Button',
    url: '/',
  },
};
