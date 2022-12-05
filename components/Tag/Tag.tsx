import { ThreeStars } from 'iconoir-react';
import React from 'react';

interface TagProps {
  label: string;
  className?: string;
  variant?:
    | 'bordered-white'
    | 'bordered-black'
    | 'blue'
    | 'special'
    | 'borderless'
    | 'bordered-black-sm';
  applyMarginBottom?: boolean;
}

const variants = {
  'bordered-white': 'border-2 border-white text-white md:text-base text-xs',
  'bordered-black':
    'border-2 border-black text-black bg-white md:text-base text-xs',
  'bordered-black-sm':
    'border-2 border-black text-black bg-white text-[12px] md:text-[14px] lg:text-base',
  special: 'text-white bg-blue-03 text-[12px] md:text-[14px] lg:text-[16px]',
  blue: 'bg-blue-02 text-white md:text-base text-xs',
  borderless: 'text-black md:text-base text-xs',
};

const Tag: React.FC<TagProps> = ({
  label,
  className = '',
  applyMarginBottom,
  variant = 'bordered-white',
}) => {
  const iconStyle = 'mr-[6px]';
  return (
    <div
      className={`flex font-bold items-center px-[6px] py-[2px] w-fit mr-2 lg:mr-4 last:mr-0 ${
        variants[variant]
      } ${className} ${applyMarginBottom && 'mb-[4px] md:mb-[8px]'}`}
    >
      {variant === 'special' && (
        <div className={iconStyle}>
          <ThreeStars width={16} height={16} />
        </div>
      )}{' '}
      {label}
    </div>
  );
};

export default Tag;
