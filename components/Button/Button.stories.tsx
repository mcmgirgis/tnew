import { ComponentMeta, ComponentStory } from '@storybook/react';
import { CursorPointer } from 'iconoir-react';

import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Black = Template.bind({});
Black.args = {
  size: 'md',
  children: 'Button',
  variant: 'black',
};

export const Grey = Template.bind({});
Grey.args = {
  size: 'lg',
  children: 'Button',
  variant: 'grey',
};

export const WhiteBordered = Template.bind({});
WhiteBordered.args = {
  size: 'lg',
  children: 'Button',
  variant: 'white-bordered',
};

export const Blue = Template.bind({});
Blue.args = {
  size: 'lg',
  children: 'Button',
  variant: 'blue',
};

export const Bordered = Template.bind({});
Bordered.args = {
  size: 'lg',
  children: 'Button',
  variant: 'bordered',
};

export const Transparent = Template.bind({});
Transparent.args = {
  size: 'lg',
  children: 'Button',
  variant: 'transparent',
};

export const ExtraLarge = Template.bind({});
ExtraLarge.args = {
  size: 'xl',
  children: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  children: 'Button',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'md',
  children: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  children: 'Button',
};

export const IconPrefix = Template.bind({});
IconPrefix.args = {
  children: 'Button',
  variant: 'grey',
  prefix: <CursorPointer />,
};

export const IconSuffix = Template.bind({});
IconSuffix.args = {
  children: 'Button',
  variant: 'black',
  suffix: <CursorPointer />,
};
