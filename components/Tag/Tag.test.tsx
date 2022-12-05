import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Tag from './Tag';
import { Default } from './Tag.stories';

test('should render Tag component', () => {
  render(<Tag label="Test tag" />);
  const tag = screen.getByText('Test tag');

  expect(tag).toBeInTheDocument();
});

test('should render Tag from storybook', () => {
  render(<Default label="Test tag storybook" />);
  const tag = screen.getByText('Test tag storybook');

  expect(tag).toBeInTheDocument();
});
