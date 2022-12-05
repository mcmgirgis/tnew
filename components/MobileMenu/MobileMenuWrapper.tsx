import Accordion from '@/components/Accordion/Accordion';
import Button from '@/components/Button/Button';
import HeaderMainNavigation from '@/components/HeaderMainNavigation/HeaderMainNavigation';
import MobileMenu from '@/components/MobileMenu/MobileMenu';
import React from 'react';

interface MenuProps {
  label: string;
  items: { label: string; url: string }[];
}

interface MobileMenuWrapperProps {
  menu: MenuProps[];
  variant?: 'white' | 'black';
}

const mockColor = {
  1: 'bg-skyblue',
  2: 'bg-purple-02',
  3: 'bg-pink-02',
  4: 'bg-white',
  5: 'bg-white',
};

const MobileMenuWrapper: React.FC<MobileMenuWrapperProps> = ({
  menu,
  variant,
}) => {
  const [openedItem, setOpenedItem] = React.useState<number>(0);
  const [openMobileMenu, setOpenMobileMenu] = React.useState<boolean>(false);

  const handleMobileMenu = () => {
    setOpenMobileMenu((state) => !state);
  };

  const handleOpenedItem = (index: number) => {
    if (openedItem === index && !index) {
      setOpenedItem(0);
    } else {
      setOpenedItem(index);
    }
  };

  return (
    <MobileMenu
      backgroundColor={
        openedItem
          ? mockColor[openedItem as keyof typeof mockColor]
          : 'bg-white'
      }
      buttonVariant={variant}
      modalVariant={
        openedItem === 0
          ? 'initial'
          : openedItem === menu.length
          ? 'white'
          : 'black'
      }
      onClick={handleMobileMenu}
      isOpen={openMobileMenu}
    >
      <div className="max-h-[calc(100%-44px)] overflow-auto">
        {menu.map((tab, index) => (
          <Accordion
            onClick={() => {
              handleOpenedItem(index + 1);
            }}
            key={`${tab.label}--${index}`}
            label={tab.label}
          >
            <HeaderMainNavigation
              classNames="flex-col font-roboto-serif"
              underlineClassName="bottom-0"
              linkClassNames="w-fit mx-0 mb-4 pb-4 !border-b-[1px] hover:!border-b-0 border-current first-of-type:mt-4"
              tabs={tab.items}
            />
          </Accordion>
        ))}
        <div
          className={`absolute shadow-mobile-actions justify-between text-xs w-full left-0 bottom-0 p-4 grid gap-4 grid-cols-12 ${
            openedItem === 0 ? 'bg-white' : 'bg-transparent'
          }`}
        >
          <Button classNames="col-span-3 !py-4">Shop</Button>
          <Button classNames="col-span-5 !py-4">Become a Member</Button>
          <Button classNames="col-span-4 !py-4">Download App</Button>
        </div>
      </div>
    </MobileMenu>
  );
};

export default MobileMenuWrapper;
