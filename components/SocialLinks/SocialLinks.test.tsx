import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import SocialLinks from './SocialLinks';

test('should render Social Links component', () => {
  expect(() => {
    render(<SocialLinks />);
  }).not.toThrow();
});
