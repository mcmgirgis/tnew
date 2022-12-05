import { ComponentMeta, ComponentStory } from '@storybook/react';

import Header from './HeaderWrapper';

export default {
  title: 'Components/Header',
  component: Header,
  argTypes: {
    variant: {
      control: 'select',
      options: ['black', 'white'],
      defaultValue: 'white',
    },
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => {
  const { variant } = args;
  const backgroundColor = variant === 'black' ? 'bg-black' : 'bg-white';
  return (
    <div className={`${backgroundColor}`}>
      <div
        className={`container ${backgroundColor} mx-auto sm:px-4 md:px-12 lg:px-0`}
      >
        <Header {...args} />
      </div>
    </div>
  );
};

export const Default = Template.bind({});
