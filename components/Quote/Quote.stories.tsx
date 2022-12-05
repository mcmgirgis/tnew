import { ComponentMeta, ComponentStory } from '@storybook/react';
import Quote from './Quote';

export default {
  title: 'Components/Quote',
  component: Quote,
} as ComponentMeta<typeof Quote>;

const Template: ComponentStory<typeof Quote> = (args) => (
  <div>
    <Quote {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  title: 'General Admission is Always Free',
  quote: '“For the Benefit of All the People Forever”',
  link: { label: 'Placeholder text/link', url: 'Placeholder text/link' },
};
