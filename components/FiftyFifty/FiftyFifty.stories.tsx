import { ComponentMeta, ComponentStory } from '@storybook/react';
import FiftyFifty from './FiftyFifty';

export default {
  title: 'Components/FiftyFifty',
  component: FiftyFifty,
} as ComponentMeta<typeof FiftyFifty>;

const Template: ComponentStory<typeof FiftyFifty> = (args) => (
  <div>
    <FiftyFifty {...args} />
  </div>
);

const defaultData = {
  attributes: {
    field_image_position: 'Right',
    field_body: {
      processed:
        '<p>Her originality, innovation, and powerful desire to communicate have propelled her through a career that has spanned six decades. During this time, Kusama has explored painting, printmaking, photography, collage, film and video, performance and installation, and product design.</p>',
    },
    field_display_option: 1,
    field_title: 'Artlens AI',
    field_cta_link: { title: 'Learn More' },
    field_image_caption: { processed: '<p>Optional Caption</p>' },
    relationships: { field_image: { data: { meta: { alt: 'Phone app' } } } },
  },
};

const imgData = {
  attributes: {
    uri: {
      url: 'https://web-backend-dev.clevelandart.org/sites/default/files/2022-11/Types-of-Art-848x530.jpeg',
    },
  },
};

export const Default = Template.bind({});
Default.args = {
  data: defaultData,
  imgData: imgData,
};

export const Inverse = Template.bind({});
Inverse.args = {
  data: {
    attributes: {
      ...defaultData.attributes,
      field_image_position: 'Left',
    },
  },
  imgData: imgData,
};

export const BigText = Template.bind({});
BigText.args = {
  data: {
    attributes: {
      ...defaultData.attributes,
      field_cta_link_secondary: { title: 'Secondary' },
      field_body: {
        processed:
          '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus rutrum interdum nibh vel, turpis est. Ornare tempus quam ut amet facilisis leo potenti tortor id. At ultricies dictum eget pellentesque porta in morbi imperdiet. Tristique phasellus dignissim aliquet in quam accumsan id nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus rutrum interdum nibh vel, turpis est. Ornare tempus quam ut amet facilisis leo potenti tortor id. At ultricies dictum eget pellentesque porta in morbi imperdiet. Tristique phasellus dignissim aliquet in quam accumsan id nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus rutrum interdum nibh vel, turpis est. quam ut amet facilisis leo potenti tortor id. At ultricies dictum eget pellentesque porta in morbi imperdiet. Tristique phasellus dignissim aliquet in quam accumsan id nunc.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risus rutrum interdum nibh vel, turpis est. </p>',
      },
    },
  },
  imgData: imgData,
};

export const SideToSide = Template.bind({});
SideToSide.args = {
  data: {
    attributes: {
      ...defaultData.attributes,
      field_display_option: 2,
    },
  },
  imgData: imgData,
};

export const SideToSideInverse = Template.bind({});
SideToSideInverse.args = {
  data: {
    attributes: {
      ...defaultData.attributes,
      field_image_position: 'Left',
      field_display_option: 2,
    },
  },
  imgData: imgData,
};
