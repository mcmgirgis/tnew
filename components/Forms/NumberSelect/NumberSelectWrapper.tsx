import React, { useState } from 'react';
import NumberSelect from './NumberSelect';

interface INumberSelectWrapperProps {
  small?: boolean;
}

// for testing purposes
const NumberSelectWrapper: React.FC<INumberSelectWrapperProps> = (props) => {
  const [value, setValue] = useState<number>(0);

  const handleAddClick = () => {
    setValue(value + 1);
  };

  const handleMinusClick = () => {
    setValue(value - 1);
  };

  return (
    <NumberSelect
      {...props}
      value={value}
      onAddButtonClick={handleAddClick}
      onMinusButtonClick={handleMinusClick}
    />
  );
};

export default NumberSelectWrapper;
