import { ComponentMeta, ComponentStory } from '@storybook/react';

import ColumnList from './ColumnList';

export default {
  title: 'Components/ColumnList',
  component: ColumnList,
} as ComponentMeta<typeof ColumnList>;

const Template: ComponentStory<typeof ColumnList> = (args) => (
  <ColumnList {...args} />
);

export const Default = Template.bind({});
Default.args = {
  list: [
    { label: 'Employment', url: '/' },
    { label: 'Internships', url: '/' },
    { label: 'Volunteer', url: '/' },
  ],
};
