import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ContentCard from './ContentCard';

test('should render Content Card component', () => {
  expect(() => {
    render(
      <ContentCard
        imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Three_guinea_pigs_%28Cavia_porcellus%29_at_Keswick_Public_Library.jpg/440px-Three_guinea_pigs_%28Cavia_porcellus%29_at_Keswick_Public_Library.jpg"
        tags={['TagText', 'Tag Text 2']}
        body="Supporting card copy"
        title="Card Title"
        cta={{ label: 'Descriptive CTA' }}
      />
    );
  }).not.toThrow();
});
