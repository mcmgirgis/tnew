import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import PromoBanner, { PromoBannerProps } from './PromoBanner';
import { Default } from './PromoBanner.stories';

beforeEach(() => {});

test('should render PromoBanner component', () => {
  render(
    <PromoBanner label="Test promo label" description="Test description" />
  );
  const banner = screen.getByTestId('promobanner');

  expect(banner).toBeInTheDocument();
});

test('should render PromoBanner from storybook', () => {
  render(<Default {...(Default.args as PromoBannerProps)} />);
  const banner = screen.getByTestId('promobanner');

  expect(banner).toBeInTheDocument();
});
