import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Button from './Button';
import {
  Black,
  Blue,
  Bordered,
  ExtraLarge,
  Grey,
  IconPrefix,
  IconSuffix,
  Large,
  Medium,
  Small,
  Transparent,
  WhiteBordered,
} from './Button.stories';

test('should render Button component', () => {
  const handleClick = jest.fn();
  render(<Button onClick={handleClick}>Button test</Button>);

  const button = screen.getByText('Button test');
  fireEvent.click(button);

  expect(handleClick).toBeCalledTimes(1);
});

test('should render Button variants from storybook', () => {
  // Black
  render(<Black {...Black.args}>Button Black</Black>);

  const buttonBlack = screen.getByText('Button Black');
  expect(buttonBlack).toBeInTheDocument();

  // Bordered
  render(<Bordered {...Bordered.args}>Button Bordered</Bordered>);

  const buttonBordered = screen.getByText('Button Bordered');
  expect(buttonBordered).toBeInTheDocument();

  // White Bordered
  render(
    <WhiteBordered {...WhiteBordered.args}>Button White Bordered</WhiteBordered>
  );

  const buttonWhiteBordered = screen.getByText('Button White Bordered');
  expect(buttonWhiteBordered).toBeInTheDocument();

  // Blue
  render(<Blue {...Blue.args}>Button Blue</Blue>);

  const buttonBlue = screen.getByText('Button Blue');
  expect(buttonBlue).toBeInTheDocument();

  // Grey
  render(<Grey {...Grey.args}>Button Grey</Grey>);

  const buttonGrey = screen.getByText('Button Grey');
  expect(buttonGrey).toBeInTheDocument();

  // Transparent
  render(<Transparent {...Transparent.args}>Button Transparent</Transparent>);

  const buttonTransparent = screen.getByText('Button Transparent');
  expect(buttonTransparent).toBeInTheDocument();
});

test('should render Button component with suffix icon', () => {
  // ARRANGE
  render(<IconSuffix {...IconSuffix.args}>Button Suffix</IconSuffix>);

  const suffixIcon = screen.getByTestId('suffix-icon');
  expect(suffixIcon).toBeInTheDocument();
});

test('should render Button component with prefix icon', () => {
  // ARRANGE
  render(<IconPrefix {...IconPrefix.args}>Button Prefix</IconPrefix>);

  const prefixIcon = screen.getByTestId('prefix-icon');
  expect(prefixIcon).toBeInTheDocument();
});

test('should render Button sizes from storybook', () => {
  // ARRANGE
  render(<ExtraLarge {...ExtraLarge.args}>Button ExtraLarge</ExtraLarge>);

  const buttonXl = screen.getByText('Button ExtraLarge');
  expect(buttonXl).toBeInTheDocument();

  render(<Large {...Large.args}>Button Large</Large>);

  const buttonLg = screen.getByText('Button Large');
  expect(buttonLg).toBeInTheDocument();

  render(<Medium {...Medium.args}>Button Medium</Medium>);

  const buttonMd = screen.getByText('Button Medium');
  expect(buttonMd).toBeInTheDocument();

  render(<Small {...Small.args}>Button Small</Small>);

  const buttonSm = screen.getByText('Button Small');
  expect(buttonSm).toBeInTheDocument();
});
