import { useTextField } from '@react-aria/textfield';
import React from 'react';

interface ITextInputProps {
  label: string;
  value: string;
  name: string;
  id?: string;
  type?: string;
  required?: boolean;
  inputClassName?: string;
  onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextInput: React.FC<ITextInputProps> = (props) => {
  const inputRef: React.MutableRefObject<HTMLInputElement | null> =
    React.useRef(null);
  const { inputClassName, onChange, ...rest } = props;
  const { inputProps } = useTextField(rest, inputRef);

  const containerStyles = 'relative w-full';
  const inputStyles = `block h-[40px] text-[13px] py-[4px] px-[14px] w-full md:h-[56px] md:text-[19px] text-gray-900 bg-white border-2 border-black appearance-none focus:outline-none peer focus-visible:outline-none focus-visible:border-blue-02 ${inputClassName}`;
  const labelStyles =
    'absolute text-[13px] left-[14px] text-black md:text-[19px] top-2 duration-300 top-2 z-10 origin-[0] bg-white px-1 peer-focus:px-1';
  const animationStylesMobile =
    'transform -translate-y-[19px] peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:-translate-y-[19px] -translate-y-[19px] peer-focus:text-blue-02 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:-translate-y-[19px]';
  const animationStylesDestop =
    'md:-translate-y-[25px] md:peer-focus:-translate-y-[25px] md:-translate-y-[25px] md:peer-focus:-translate-y-[25px]';
  return (
    <div className={containerStyles}>
      <input
        ref={inputRef}
        {...inputProps}
        className={inputStyles}
        type="text"
        placeholder=" "
        onChange={onChange}
        {...rest}
      />
      <label
        htmlFor={inputProps.id}
        aria-label={props.label}
        aria-required="true"
        className={`${labelStyles} ${animationStylesMobile} ${animationStylesDestop}`}
      >
        {props.label}
      </label>
    </div>
  );
};

export default TextInput;
