import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Newsletter from './Newsletter';

export default {
  title: 'Components/Newsletter',
  component: Newsletter,
} as ComponentMeta<typeof Newsletter>;

const Template: ComponentStory<typeof Newsletter> = () => {
  const [email, setEmail] = React.useState<string>('');
  const onChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    },
    []
  );
  return <Newsletter value={email} onChange={onChange} />;
};

export const Default = Template.bind({});

Default.args = {};
