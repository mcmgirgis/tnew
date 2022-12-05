import ColumnList, { List } from '@/components/ColumnList/ColumnList';
import Image from 'next/image';
import React from 'react';

interface HeaderMainNavigationProps {
  data: List[];
  backgroundColor?: string;
  visibleTab: number;
  variant?: 'black' | 'white';
  onMouseOut: (tab: number) => void;
}

const mockImages = [
  'https://piction.clevelandart.org/cma/ump.di?e=764E195670BFD8543D3D630E145BBF92C223C29B4ED27A9FCE113D9DF0EE6CE4&s=24247294&se=672506398&v=4&f=1974.53_o5.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Armor_room_-_Cleveland_Museum_of_Art_-_DSC08980.JPG/1024px-Armor_room_-_Cleveland_Museum_of_Art_-_DSC08980.JPG',
  'https://static01.nyt.com/images/2021/09/02/arts/02museums-tour-1/merlin_193884324_93c3f30f-a61b-41b3-baaa-9260d21c5fc6-articleLarge.jpg',
  'https://piction.clevelandart.org/cma/ump.di?e=BA2D58933E1413A2622D2793CDA06C2846B51B6D839C6C85A8295BB175F6F601&s=24247294&se=2040367084&v=0&f=2016.32_o5.jpg',
  'https://piction.clevelandart.org/cma/ump.di?e=C67443599AF8C1869FE219A9F7C394D7154DDE5F7A1D52DD8D1AAD1990DC2C38&s=24247294&se=1779570359&v=3&f=1914.680_o5.jpg',
  'https://piction.clevelandart.org/cma/ump.di?e=58FC0BF34E2693C355480CE5F1E76BDD6A9C75CA322F3BBDE703646CF2800A02&s=24247294&se=1874935360&v=4&f=1961.205_o5.jpg',
  'https://piction.clevelandart.org/cma/ump.di?e=1E0FB20BDA9F78F02009587D5751D2432FED5B1FAA701B297F8AA5E40C89C496&s=24247294&se=918126186&v=1&f=%5Cd9142%5Cu214791424%5C2018.290_o5.jpg',
];

const variantColors = {
  black:
    'text-white before:bg-white before:shadow-[0px_3em_0px_white,0px_6em_0px_white,0px_9em_0px_white]',
  white:
    'text-black before:bg-black before:shadow-[0px_3em_0px_black,0px_6em_0px_black,0px_9em_0px_black]',
};

const HeaderMainNavigationMenu: React.FC<HeaderMainNavigationProps> = ({
  data,
  backgroundColor = 'bg-current',
  variant = 'white',
  visibleTab,
  onMouseOut,
}) => {
  const [initialTab, setInitialTab] = React.useState<number>(visibleTab);
  const [selectedLink, setSelectedLink] = React.useState<number>(0);
  const columns: List[][] = [];
  const chunkSize = 4;

  for (let i = 0; i < data.length; i += chunkSize) {
    const chunk = data.slice(i, i + chunkSize);
    columns.push(chunk);
  }
  const handleMouseOut = () => {
    if (!onMouseOut) return;
    onMouseOut(0);
  };

  return (
    <div
      onMouseLeave={handleMouseOut}
      className={`
        justify-between pl-16 ${
          visibleTab
            ? 'max-h-[570px] py-24 md:flex sm:hidden before:content-[""] before:absolute before:w-6 before:h-8 before:left-0 before:mb-4 before:-translate-2/4'
            : 'max-h-0'
        }
        ${
          variantColors[variant]
        } absolute z-30 md:w-[calc(100%-48px)] lg:w-[calc(100%-80px)] left-0 ${backgroundColor} transition-all ease-in-out
      `}
    >
      {visibleTab ? (
        <div className="container mx-auto max-h-[570px] flex">
          {columns.map((column, idx) => {
            return (
              <ColumnList
                onMouseEnter={setSelectedLink}
                key={idx}
                className="mr-16 font-roboto-serif w-fit"
                underlineClasseName="hover:!mb-[17px] lg:hover:!mb-[21px]"
                linkClassName="after:h-px after:hover:h-0 after:bg-current after:w-[193px] after:absolute after:-bottom-0.5 after:left-0 hover:!border-b-0 hover:!mb-3 md:!text-[25px] lg:!text-[40px] -tracking-[0.01em] !border-current md:!mb-[15px] hover:md:!mb-[15px] pb-4 last-of-type:pb-4 !leading-[130%]"
                animatedUnderline
                list={column}
              />
            );
          })}
          <Image
            width={490}
            height={350}
            className="md:-mr-6 lg:-mr-10 absolute right-0 lg:max-h-[350px] lg:max-w-[490px] md:max-h-[270px] md:max-w-[380px]"
            src={mockImages[selectedLink || visibleTab]}
            alt="navigation-image"
          />
        </div>
      ) : null}
    </div>
  );
};

export default HeaderMainNavigationMenu;
