import { ComponentMeta, ComponentStory } from '@storybook/react';

import ArtWorkCard from './ArtWorkCard';

export default {
  title: 'Components/ArtWorkCard',
  component: ArtWorkCard,
} as ComponentMeta<typeof ArtWorkCard>;

const Template: ComponentStory<typeof ArtWorkCard> = (args) => (
  <ArtWorkCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Title',
  width: 300,
  height: 500,
  description: 'Description',
  image:
    'https://piction.clevelandart.org/cma/ump.di?e=875F311B8ABDADB7679048327F68807487ADCD9482F3B55F141F97DF54516092&s=24247294&se=1068682658&v=0&f=1976.2_o5.jpg',
  cta: 'View ArtWork',
  url: '/',
  publicDomain: '1965.233',
  vertical: false,
};
