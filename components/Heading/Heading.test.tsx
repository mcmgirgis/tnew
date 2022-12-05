import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Heading, { HeadingProps } from './Heading';
import { Default } from './Heading.stories';

beforeEach(() => {});

test('should render Heading H1 component', () => {
  render(<Heading variant="h1" label="Test heading" />);
  const heading = screen.getByRole('heading', { level: 1 });

  expect(heading).toBeInTheDocument();
});

test('should render Heading H2 component', () => {
  render(<Heading variant="h2" label="Test heading" />);
  const heading = screen.getByRole('heading', { level: 2 });

  expect(heading).toBeInTheDocument();
});

test('should render Heading H3 component', () => {
  render(<Heading variant="h3" label="Test heading" />);
  const heading = screen.getByRole('heading', { level: 3 });

  expect(heading).toBeInTheDocument();
});

test('should render Heading H4 component', () => {
  render(<Heading variant="h4" label="Test heading" />);
  const heading = screen.getByRole('heading', { level: 4 });

  expect(heading).toBeInTheDocument();
});

test('should render Heading H5 component', () => {
  render(<Heading variant="h5" label="Test heading" />);
  const heading = screen.getByRole('heading', { level: 5 });

  expect(heading).toBeInTheDocument();
});

test('should render Heading from storybook', () => {
  render(<Default {...(Default.args as HeadingProps)} />);
  const banner = screen.getByText('Test');

  expect(banner).toBeInTheDocument();
});
