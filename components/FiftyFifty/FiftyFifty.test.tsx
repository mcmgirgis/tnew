import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import FiftyFifty from './FiftyFifty';

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

test('should render Image text Fifty/fifty component', () => {
  expect(() => {
    render(<FiftyFifty data={defaultData} imgData={imgData} />);
  }).not.toThrow();
});
