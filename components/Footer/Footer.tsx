import React from 'react';

interface FooterProps {
  children: React.ReactChild | React.ReactChild[];
}

const Footer = ({ children }: FooterProps) => {
  return (
    <div className="bg-black text-white grow w-full sm:pt-12 sm:pb-8 md:pt-20 md:pb-6">
      {children}
    </div>
  );
};

export default Footer;
