import { ComponentMeta, ComponentStory } from '@storybook/react';

import HeaderMainNavigationMenu from './HeaderMainNavigationMenu';

export default {
  title: 'Components/HeaderMainNavigationMenu',
  component: HeaderMainNavigationMenu,
  argTypes: {
    backgroundColor: {
      control: 'select',
      options: ['bg-pink-02', 'bg-purple-02', 'bg-skyblue'],
      defaultValue: 'bg-skyblue',
    },
    variant: {
      control: 'select',
      options: ['black', 'white'],
      defaultValue: 'white',
    },
  },
} as ComponentMeta<typeof HeaderMainNavigationMenu>;

const Template: ComponentStory<typeof HeaderMainNavigationMenu> = (args) => (
  <HeaderMainNavigationMenu {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: [
    {
      label: 'Art',
      url: '/',
    },
    {
      label: "What's On",
      url: '/',
    },
    {
      label: 'Visit',
      url: '/',
    },
  ],
};
