import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Default as TextInputWrapper } from './TextInput.stories';

test('should render TextInput component', () => {
  expect(() => {
    render(<TextInputWrapper />);
  }).not.toThrow();
});

test('Make sure inputted text is there', function () {
  render(<TextInputWrapper />);
  const input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: 'qwerty' } });
  expect(input).toHaveValue('qwerty');
});
