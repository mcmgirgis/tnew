import { ComponentMeta, ComponentStory } from '@storybook/react';

import ScheduleList from './ScheduleList';

export default {
  title: 'Components/ScheduleList',
  component: ScheduleList,
} as ComponentMeta<typeof ScheduleList>;

const Template: ComponentStory<typeof ScheduleList> = (args) => (
  <ScheduleList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  data: [
    {
      days: 'Wednesday through Sunday',
      hours: '11:00 a.m. - 5:00 p.m.',
    },
    {
      days: 'Monday, Tuesday',
      hours: 'Closed',
    },
  ],
};
