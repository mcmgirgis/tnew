import React from 'react';

interface FooterRowProps {
  children: React.ReactChild | React.ReactChild[];
}

const numberOfColumns = {
  1: 'sm:grid-cols-4 md:grid-cols-12 grid-cols-1 md:gap-x-6 gap-x-4',
  2: 'sm:grid-cols-4 md:grid-cols-12 grid-cols-1 md:gap-x-6 gap-x-4',
  3: 'sm:grid-cols-4 md:grid-cols-12 grid-cols-1 md:gap-x-6 gap-x-4',
  4: 'sm:grid-cols-4 md:grid-cols-12 grid-cols-1 md:gap-x-6 gap-x-4',
  5: 'sm:grid-cols-4 md:grid-cols-12 grid-cols-2 md:gap-x-6 gap-x-4',
};

const FooterRow: React.FC<FooterRowProps> = ({ children }) => {
  const numberOfChildren = React.Children.count(children);
  return (
    <div
      className={`
      ${
        numberOfColumns[numberOfChildren as keyof typeof numberOfColumns] ||
        'grid-cols-none'
      }
        grid
        border-t
        py-5
        md:py-20
        md:justify-between
        last-of-type:pb-0
      `}
    >
      {children}
    </div>
  );
};
export default FooterRow;
