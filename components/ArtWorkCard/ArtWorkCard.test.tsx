import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import ArtWorkCard from './ArtWorkCard';

const initialValue = {
  title: 'Title',
  width: 300,
  height: 500,
  description: 'Description',
  image:
    'https://piction.clevelandart.org/cma/ump.di?e=875F311B8ABDADB7679048327F68807487ADCD9482F3B55F141F97DF54516092&s=24247294&se=1068682658&v=0&f=1976.2_o5.jpg',
  cta: 'View ArtWork',
  url: '/',
  publicDomain: '1965.233',
  vertical: false,
};

test('should render ArtWorkCard component', () => {
  expect(() => {
    render(<ArtWorkCard {...initialValue} />);
  }).not.toThrow();
});
