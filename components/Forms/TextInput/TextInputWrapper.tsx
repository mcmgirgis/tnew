import React, { useState } from 'react';
import TextInput from './TextInput';

// for testing purposes
const NumberSelectWrapper = () => {
  const [value, setValue] = useState<string>('');

  const handleInputChange = (evt: React.FormEvent<HTMLInputElement>) => {
    setValue(evt.currentTarget.value);
  };

  return (
    <TextInput
      value={value}
      name="basicInput"
      label="Input Field"
      onChange={handleInputChange}
    />
  );
};

export default NumberSelectWrapper;
