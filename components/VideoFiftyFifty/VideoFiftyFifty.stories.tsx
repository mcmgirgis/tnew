import { ComponentMeta, ComponentStory } from '@storybook/react';
import VideoFiftyFifty from './VideoFiftyFifty';

export default {
  title: 'Components/VideoFiftyFifty',
  component: VideoFiftyFifty,
} as ComponentMeta<typeof VideoFiftyFifty>;

const Template: ComponentStory<typeof VideoFiftyFifty> = (args) => (
  <div>
    <VideoFiftyFifty {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  title: 'Video Title',
  tag: 'Optional',
  body: 'Body Copy',
  cta: 'CTA',
  imgSrc:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Three_guinea_pigs_%28Cavia_porcellus%29_at_Keswick_Public_Library.jpg/2560px-Three_guinea_pigs_%28Cavia_porcellus%29_at_Keswick_Public_Library.jpg',
  videoUrl:
    'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  imgAlt: 'img',
};
