import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import MultiColumnGrid from './MultiColumnGrid';

test('should render MultiColumnGrid component', () => {
  expect(() => {
    render(
      <MultiColumnGrid
        title="Related Content"
        background="blue"
        gridMaxColumns="4"
        items={[
          {
            imgUrl:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Three_guinea_pigs_%28Cavia_porcellus%29_at_Keswick_Public_Library.jpg/2560px-Three_guinea_pigs_%28Cavia_porcellus%29_at_Keswick_Public_Library.jpg',
            id: '1',
            title: 'One Or Two Line Header Lorem Ipsum Dolor Sit',
            specialTags: ['S-Tag'],
            tags: ['Tag text'],
            body: 'Supporting copy',
            cta: { label: 'Button Text' },
          },
        ]}
      />
    );
  }).not.toThrow();
});
