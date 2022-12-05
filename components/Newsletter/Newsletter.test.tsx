import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Newsletter from './Newsletter';

test('Make sure form has value', function () {
  const onChange = jest.fn();
  render(<Newsletter onChange={(e) => onChange(e.target.value)} value="" />);
  const input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: 'test@test.com' } });
  expect(onChange).toBeCalledWith('test@test.com');
});
