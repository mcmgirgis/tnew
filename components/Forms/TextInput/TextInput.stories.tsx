import { ComponentMeta, ComponentStory } from '@storybook/react';
import TextInputWrapper from './TextInputWrapper';

export default {
  title: 'Components/TextInput',
  component: TextInputWrapper,
} as ComponentMeta<typeof TextInputWrapper>;

const Template: ComponentStory<typeof TextInputWrapper> = () => (
  <TextInputWrapper />
);

export const Default = Template.bind({});

Default.args = {};
