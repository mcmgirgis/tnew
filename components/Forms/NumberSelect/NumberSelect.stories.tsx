import { ComponentMeta, ComponentStory } from '@storybook/react';
import NumberSelect from './NumberSelect';
import NumberSelectWrapper from './NumberSelectWrapper';

export default {
  title: 'Components/NumberSelect',
  component: NumberSelect,
} as ComponentMeta<typeof NumberSelect>;

const Template: ComponentStory<typeof NumberSelect> = (args) => (
  <NumberSelectWrapper {...args} />
);

export const Default = Template.bind({});

Default.args = {};

export const Small = Template.bind({});

Small.args = {
  small: true,
};
