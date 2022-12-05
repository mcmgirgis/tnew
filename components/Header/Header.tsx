import Logo from '@/components/Logo/Logo';
import Link from 'next/link';
import React from 'react';

interface HeaderProps {
  children: React.ReactNode;
  variant?: 'black' | 'white';
}

const variantColors = {
  black: 'bg-black text-white',
  white: 'bg-white text-black',
};

const Header: React.FC<HeaderProps> = ({ children, variant = 'white' }) => {
  return (
    <div
      className={`md:py-8 sm:py-1 ${variantColors[variant]} flex justify-between items-center lg:py-8 sm:py-2 md:py-6 relative`}
    >
      <div className="cursor-pointer col-span-5">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      {children}
    </div>
  );
};

export default Header;
