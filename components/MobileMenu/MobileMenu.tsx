import { Cancel } from 'iconoir-react';
import React from 'react';
import Button from '../Button/Button';

const MenuIcon = () => (
  <svg
    width="24"
    height="25"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 5.10156H21"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M10 12L21 12"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M3 19.1016H21"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

interface MobileMenuProps {
  children?: React.ReactChild | React.ReactChild[];
  isOpen: boolean;
  backgroundColor?: string;
  buttonVariant?: 'white' | 'black';
  modalVariant?: 'white' | 'black' | 'initial';
  onClick: () => void;
}

const variantColors = {
  black: 'text-white',
  white: 'text-black',
};

const variantModal = {
  initial:
    'text-black before:shadow-[0px_13em_0px_black,0px_16em_0px_black,0px_19em_0px_black,0px_22em_0px_black]',
  black:
    'text-white before:bg-white before:shadow-[0px_3em_0px_white,0px_6em_0px_white,0px_9em_0px_white]',
  white:
    'text-black before:bg-black before:shadow-[0px_3em_0px_black,0px_6em_0px_black,0px_9em_0px_black]',
};

const MobileMenu: React.FC<MobileMenuProps> = ({
  children,
  isOpen,
  backgroundColor,
  buttonVariant = 'black',
  modalVariant = 'black',
  onClick,
}) => {
  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);
  return (
    <>
      <Button
        prefix={isOpen ? <Cancel /> : <MenuIcon />}
        prefixClassname="pr-0 sm:text-base mb-1"
        onClick={onClick}
        classNames={`sm:!font-medium md:!font-bold sm:text-[11px] md:text-xl ${variantColors[buttonVariant]} md:flex-row flex-col !p-2 sm:!px-2 sm:!py-0`}
        variant={buttonVariant}
      >
        {isOpen ? 'Close' : 'Menu'}
      </Button>
      {
        <div
          className={` ${
            isOpen
              ? 'max-h-[calc(100vh-66px)] h-[calc(100vh-66px)] before:absolute before:w-6 before:h-8 before:left-0 before:mb-4 py-12'
              : 'max-h-0'
          }
            absolute sm:w-screen sm:-ml-4 md:ml-0 md:w-full transition-all ease-in-out
            px-8 left-0 top-0 z-30 mt-[66px]
             before:-translate-2/4
            ${variantModal[modalVariant]} ${backgroundColor} tra
          `}
        >
          {isOpen ? children : null}
        </div>
      }
    </>
  );
};

export default MobileMenu;
