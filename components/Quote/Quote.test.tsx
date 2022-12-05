import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Quote from './Quote';

test('should render Quote component', () => {
  expect(() => {
    render(
      <Quote
        title="Video Title"
        quote="“For the Benefit of All the People Forever”"
        link={{ label: 'Placeholder text/link', url: 'Placeholder text/link' }}
      />
    );
  }).not.toThrow();
});
