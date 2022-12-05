import { ComponentMeta, ComponentStory } from '@storybook/react';
import Faq from './Faq';

export default {
  title: 'Components/Faq',
  component: Faq,
} as ComponentMeta<typeof Faq>;

const Template: ComponentStory<typeof Faq> = (args) => <Faq {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: 'Our Strategic Plan',
  items: [
    {
      id: 'visionMission',
      title: 'Vision, Mission, and Promise',
      body: 'The museum brings together art, place, and audience to create engagement and inspire wonder. The goals of the plan are designed to activate each of these three essential components of the museum experience, as well as to strengthen the financial underpinnings and organizational culture of our institution.',
    },
    {
      id: 'orgValues',
      title: 'Our Organizational Values',
      body: 'The museum brings together art, place, and audience to create engagement and inspire wonder. The goals of the plan are designed to activate each of these three essential components of the museum experience, as well as to strengthen the financial underpinnings and organizational culture of our institution.',
    },
    {
      id: 'leadValues',
      title: 'Our Leadership Values',
      body: 'The museum brings together art, place, and audience to create engagement and inspire wonder. The goals of the plan are designed to activate each of these three essential components of the museum experience, as well as to strengthen the financial underpinnings and organizational culture of our institution.',
    },
    {
      id: 'makingArt',
      title: 'Making Art Matter: Strategic Planning Framework',
      body: 'The museum brings together art, place, and audience to create engagement and inspire wonder. The goals of the plan are designed to activate each of these three essential components of the museum experience, as well as to strengthen the financial underpinnings and organizational culture of our institution.',
    },
    {
      id: 'success',
      title: 'Measures of Success',
      body: 'The museum brings together art, place, and audience to create engagement and inspire wonder. The goals of the plan are designed to activate each of these three essential components of the museum experience, as well as to strengthen the financial underpinnings and organizational culture of our institution.',
    },
    {
      id: 'art',
      title: 'Art',
      body: 'The museum brings together art, place, and audience to create engagement and inspire wonder. The goals of the plan are designed to activate each of these three essential components of the museum experience, as well as to strengthen the financial underpinnings and organizational culture of our institution.',
    },
    {
      id: 'place',
      title: 'Place',
      body: 'The museum brings together art, place, and audience to create engagement and inspire wonder. The goals of the plan are designed to activate each of these three essential components of the museum experience, as well as to strengthen the financial underpinnings and organizational culture of our institution.',
    },
    {
      id: 'audience',
      title: 'Audience',
      body: 'The museum brings together art, place, and audience to create engagement and inspire wonder. The goals of the plan are designed to activate each of these three essential components of the museum experience, as well as to strengthen the financial underpinnings and organizational culture of our institution.',
    },
    {
      id: 'resources',
      title: 'Resources',
      body: 'The museum brings together art, place, and audience to create engagement and inspire wonder. The goals of the plan are designed to activate each of these three essential components of the museum experience, as well as to strengthen the financial underpinnings and organizational culture of our institution.',
    },
    {
      id: 'orgCulture',
      title: 'Organizational Culture',
      body: 'The museum brings together art, place, and audience to create engagement and inspire wonder. The goals of the plan are designed to activate each of these three essential components of the museum experience, as well as to strengthen the financial underpinnings and organizational culture of our institution.',
    },
    {
      id: 'budget',
      title: 'Budget and Human Resource Implications',
      body: 'The museum brings together art, place, and audience to create engagement and inspire wonder. The goals of the plan are designed to activate each of these three essential components of the museum experience, as well as to strengthen the financial underpinnings and organizational culture of our institution.',
    },
    {
      id: 'process',
      title: 'The Process',
      body: 'The museum brings together art, place, and audience to create engagement and inspire wonder. The goals of the plan are designed to activate each of these three essential components of the museum experience, as well as to strengthen the financial underpinnings and organizational culture of our institution.',
    },
    {
      id: 'gratitude',
      title: 'With Gratitude',
      body: 'The museum brings together art, place, and audience to create engagement and inspire wonder. The goals of the plan are designed to activate each of these three essential components of the museum experience, as well as to strengthen the financial underpinnings and organizational culture of our institution.',
    },
  ],
};
