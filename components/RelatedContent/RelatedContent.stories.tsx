import { ComponentMeta, ComponentStory } from '@storybook/react';
import RelatedContent from './RelatedContent';

export default {
  title: 'Components/RelatedContent',
  component: RelatedContent,
} as ComponentMeta<typeof RelatedContent>;

const Template: ComponentStory<typeof RelatedContent> = (args) => (
  <div>
    <RelatedContent {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Related Content',
  items: [
    {
      imgSrc:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Three_guinea_pigs_%28Cavia_porcellus%29_at_Keswick_Public_Library.jpg/2560px-Three_guinea_pigs_%28Cavia_porcellus%29_at_Keswick_Public_Library.jpg',
      id: '1',
      title: 'One Or Two Line Header Lorem Ipsum Dolor Sit',
      tag: 'Tag text',
      subtitle: 'Supporting copy',
      buttonText: 'Button Text',
    },
    {
      imgSrc:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/576px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg',
      id: '2',
      title: 'One Or Two Line Header Lorem Ipsum Dolor Sit',
      tag: 'Tag text',
      subtitle: 'Supporting copy',
      buttonText: 'Button Text',
    },
    {
      imgSrc:
        'https://www.telegraph.co.uk/content/dam/Travel/hotels/europe/turkey/istanbul/istanbul-guide-lead.jpg?imwidth=960',
      id: '3',
      title: 'One Or Two Line Header Lorem Ipsum Dolor Sit',
      tag: 'Tag text',
      subtitle: 'Supporting copy',
      buttonText: 'Button Text',
    },
    {
      imgSrc:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg/2000px-Palace_of_Westminster_from_the_dome_on_Methodist_Central_Hall_%28cropped%29.jpg',
      id: '4',
      title: 'One Or Two Line Header Lorem Ipsum Dolor Sit',
      tag: 'Tag text',
      subtitle: 'Supporting copy',
      buttonText: 'Button Text',
    },
    {
      imgSrc:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Cidade_Maravilhosa.jpg/536px-Cidade_Maravilhosa.jpg',
      id: '5',
      title: 'One Or Two Line Header Lorem Ipsum Dolor Sit',
      tag: 'Tag text',
      subtitle: 'Supporting copy',
      buttonText: 'Button Text',
    },
  ],
};
