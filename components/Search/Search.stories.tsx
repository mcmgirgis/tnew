import { ComponentMeta, ComponentStory } from '@storybook/react';

import Search from './Search';

export default {
  label: 'Components/Search',
  component: Search,
  argTypes: {
    control: 'select',
    options: ['black', 'white'],
    defaultValue: 'white',
  },
} as ComponentMeta<typeof Search>;

const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const Default = Template.bind({});
Default.args = {
  informationResults: [
    {
      label: 'Plan Your Visit',
      url: '/',
    },
    {
      label: 'Reserve Tickets',
      url: '/',
    },
    {
      label: 'Admissions and Hours',
      url: '/',
    },
    {
      label: 'Engage from Home',
      url: '/',
    },
    {
      label: 'Contact us',
      url: '/',
    },
  ],
  artResults: [
    {
      label: 'African American Artists',
      url: '/',
    },
    {
      label: 'LGBTQ Artists After 1900',
      url: '/',
    },

    {
      label: 'Female Artists',
      url: '/',
    },
    {
      label: 'Nancy F. and Joseph P. Keithley Gifts',
      url: '/',
    },
    {
      label: 'Made Under Age 30',
      url: '/',
    },
    {
      label: 'Nazi Era Provenance',
      url: '/',
    },
    {
      label: 'On Loan',
      url: '/',
    },
    {
      label: 'Recent Acquisitions',
      url: '/',
    },
  ],
};
