import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import RelatedContent from './RelatedContent';

test('should render Related content component', () => {
  expect(() => {
    render(
      <RelatedContent
        title="Related Content"
        items={[
          {
            imgSrc:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Three_guinea_pigs_%28Cavia_porcellus%29_at_Keswick_Public_Library.jpg/2560px-Three_guinea_pigs_%28Cavia_porcellus%29_at_Keswick_Public_Library.jpg',
            id: '1',
            title: 'One Or Two Line Header Lorem Ipsum Dolor Sit',
            tag: 'Tag text',
            subtitle: 'Supporting copy',
            buttonText: 'Button Text',
          },
        ]}
      />
    );
  }).not.toThrow();
});
