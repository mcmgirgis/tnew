import React from 'react';

type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5';

export interface HeadingProps {
  label: string;
  children?: React.ReactChild | React.ReactChild[];
  variant?: HeadingVariant;
  className?: string;
}

const getHeadingVariant = (
  variant: HeadingVariant,
  label: string,
  className: string
) => {
  switch (variant) {
    case 'h1':
      return (
        <h1 data-testid="heading" className={className}>
          {label}
        </h1>
      );
    case 'h2':
      return (
        <h2 data-testid="heading" className={className}>
          {label}
        </h2>
      );
    case 'h3':
      return (
        <h3 data-testid="heading" className={className}>
          {label}
        </h3>
      );
    case 'h4':
      return (
        <h4 data-testid="heading" className={className}>
          {label}
        </h4>
      );
    case 'h5':
      return (
        <h5 data-testid="heading" className={className}>
          {label}
        </h5>
      );
    default:
      return null;
  }
};

const Heading: React.FC<HeadingProps> = ({
  label,
  children,
  variant = 'h3',
  className = '',
}) => {
  const initialClassName = `prose-${variant} ${
    variant === 'h5' ? 'md:mb-6 mb-2' : 'lg:mb-6 md:mb-2 sm:mb-3'
  }`;
  const headingTag = getHeadingVariant(variant, label, initialClassName);

  return (
    <div className={`mb-5 md:mb-0 flex-col flex md:w-auto w-full ${className}`}>
      {headingTag}
      {children}
    </div>
  );
};

export default Heading;
