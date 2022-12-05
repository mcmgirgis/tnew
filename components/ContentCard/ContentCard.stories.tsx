import { ComponentMeta, ComponentStory } from '@storybook/react';
import ContentCard from './ContentCard';

export default {
  title: 'Components/ContentCard',
  component: ContentCard,
} as ComponentMeta<typeof ContentCard>;

const Template: ComponentStory<typeof ContentCard> = (args) => (
  <div className="max-w-[171px] md:max-w-[387px]">
    <ContentCard {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  imgUrl:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Three_guinea_pigs_%28Cavia_porcellus%29_at_Keswick_Public_Library.jpg/440px-Three_guinea_pigs_%28Cavia_porcellus%29_at_Keswick_Public_Library.jpg',
  specialTags: ['S-Tag 1'],
  tags: ['TagText', 'Tag Text 2'],
  body: 'Supporting card copy',
  title: 'Card Title',
  additionalInfo: 'Ticket Required',
  additionalInfo2: 'On-Sale December 31',
  additionalBody: 'Supporting card copy',
  cta: { label: 'Descriptive CTA' },
};
