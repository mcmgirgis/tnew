import { useButton } from '@react-aria/button';
import React from 'react';

interface ButtonProps {
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactChild;
  suffix?: React.ReactElement;
  prefix?: React.ReactElement;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  fontWeight?: 'normal' | 'bold' | 'medium';
  removePaddingX?: boolean;
  marginRight?: boolean;
  classNames?: string;
  prefixClassname?: string;
  suffixClassname?: string;
  variant?:
    | 'black'
    | 'blue'
    | 'transparent'
    | 'grey'
    | 'bordered'
    | 'white'
    | 'yellow'
    | 'white-bordered';
}

const variants = {
  black: `bg-black text-white`,
  blue: `bg-blue-500 border-black text-white`,
  transparent:
    'bg-transparent text-black hover:text-blue-02 hover:underline group-hover:text-blue-02 group-hover:underline',
  grey: 'bg-zinc-500 text-black text-white',
  bordered: 'bg-transparent text-black border-black border-2',
  white: 'bg-white text-black',
  'white-bordered': 'border-white border-2',
  yellow: 'md:bg-yellow-02 text-black',
};

const sizes = {
  xl: 'py-6 px-8 textLg',
  lg: 'py-4 px-6 textLg',
  md: 'py-2 px-4 sm:text-[12px] md:text-[15px] lg:text-[18px]',
  sm: 'py-1 px-4 sm:text-[12px] md:text-[15px] lg:text-[18px]',
};

const fontWeightVariants = {
  bold: 'font-bold',
  normal: 'font-normal',
  medium: 'font-medium',
};

const Button = (props: ButtonProps) => {
  const elementRef: React.MutableRefObject<HTMLButtonElement | null> =
    React.useRef(null);
  const { buttonProps } = useButton(props, elementRef);
  const {
    prefix,
    suffix,
    prefixClassname = '',
    suffixClassname = '',
    size = 'md',
    fontWeight = 'bold',
    variant = 'black',
    children,
    classNames = '',
    marginRight,
    ...rest
  } = props;
  const iconColor =
    variant !== 'bordered' && variant !== 'grey' && variant !== 'black'
      ? 'text-black'
      : 'text-white';

  const paddingStyles = props.removePaddingX ? 'px-0' : '';

  return (
    <button
      ref={elementRef}
      className={`${sizes[size]} ${variants[variant]} ${
        fontWeightVariants[fontWeight]
      } ${
        marginRight && 'mr-[4px]'
      } flex items-center justify-center ${classNames} ${paddingStyles}`}
      {...buttonProps}
      {...rest}
    >
      {prefix && (
        <div
          data-testid="prefix-icon"
          className={`pr-4 ${iconColor} ${prefixClassname}`}
        >
          {prefix}
        </div>
      )}
      {children}
      {suffix && (
        <div
          data-testid="suffix-icon"
          className={`pl-4 ${iconColor} ${suffixClassname}`}
        >
          {suffix}
        </div>
      )}
    </button>
  );
};

export default Button;
