import { Minus, Plus } from 'iconoir-react';
import React from 'react';
import Button from '../Button/Button';

interface AccordionProps {
  label: string;
  children: React.ReactChild | React.ReactChild[];
  onClick?: () => void;
}

const Accordion: React.FC<AccordionProps> = ({ children, onClick, label }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  const handleIsOpen = () => {
    onClick && onClick();
    setIsOpen((state) => !state);
  };
  return (
    <>
      <Button
        suffix={isOpen ? <Minus /> : <Plus />}
        suffixClassname="!text-current"
        variant="transparent"
        classNames="items-center w-full justify-between !border-transparent !no-underline !text-current"
        onClick={handleIsOpen}
      >
        <span
          className={`text-2xl font-medium ${
            isOpen ? 'border-b-4 pb-2 border-current' : ''
          }`}
        >
          {label}
        </span>
      </Button>
      <div
        className={`px-4 pt-0 overflow-hidden ${
          isOpen ? 'max-h-max' : 'max-h-0'
        }`}
      >
        {children}
      </div>
    </>
  );
};
export default Accordion;
