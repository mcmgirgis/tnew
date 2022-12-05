import ArtWorkCard from '@/components/ArtWorkCard/ArtWorkCard';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import MasonryGrid from './MasonryGrid';

const artCardData = {
  title: 'Title',
  width: 500,
  height: 800,
  description: 'Description',
  image:
    'https://piction.clevelandart.org/cma/ump.di?e=875F311B8ABDADB7679048327F68807487ADCD9482F3B55F141F97DF54516092&s=24247294&se=1068682658&v=0&f=1976.2_o5.jpg',
  cta: 'View ArtWork',
  url: '/',
  publicDomain: '1965.233',
  vertical: true,
};

const initialValue = [
  <ArtWorkCard key={1} {...artCardData} />,
  <ArtWorkCard key={2} {...artCardData} />,
  <ArtWorkCard key={3} {...artCardData} />,
  <ArtWorkCard key={4} {...artCardData} />,
];

test('should render MasonryGrid component', () => {
  expect(() => {
    render(<MasonryGrid list={initialValue} />);
  }).not.toThrow();
});
