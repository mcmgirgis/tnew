import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import NumberSelectWrapper from './NumberSelectWrapper';

test('should render Number Select component', () => {
  const { getByTestId, getByText } = render(<NumberSelectWrapper />);

  const addButton = getByTestId('number-select-add');
  fireEvent.click(addButton);
  fireEvent.click(addButton);

  expect(getByText('2')).toBeInTheDocument();

  const minusButton = getByTestId('number-select-minus');
  fireEvent.click(minusButton);

  expect(getByText('1')).toBeInTheDocument();
});
