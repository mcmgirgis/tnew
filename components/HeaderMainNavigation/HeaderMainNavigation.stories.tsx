import { ComponentMeta, ComponentStory } from '@storybook/react';

import HeaderMainNavigation from './HeaderMainNavigation';

export default {
  title: 'Components/HeaderMainNavigation',
  component: HeaderMainNavigation,
} as ComponentMeta<typeof HeaderMainNavigation>;

const Template: ComponentStory<typeof HeaderMainNavigation> = (args) => (
  <HeaderMainNavigation {...args} />
);

export const Default = Template.bind({});
Default.args = {
  tabs: [
    {
      label: 'Art',
      color: 'skyblue',
      url: '/',
    },
    {
      label: "What's On",
      color: 'purple-02',
      url: '/',
    },
    {
      label: 'Visit',
      color: 'pink-02',
      url: '/',
    },
  ],
};
