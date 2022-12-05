import React, { useState } from 'react';
import MinusIcon from './Icons/Minus';
import PlusIcon from './Icons/Plus';

interface IFaqItem {
  id: string;
  title: string;
  body: string;
}

interface IFaqProps {
  heading: string;
  items: IFaqItem[];
}

const Faq: React.FC<IFaqProps> = (props) => {
  const [expandedItem, setExpandedItem] = useState<string>('');
  const containerStyles =
    'w-[calc(100%-12px)] mb-[12px] relative -right-[12px] flex justify-center bg-off-white py-[40px] md:py-[60px] px-[16px] md:px-[48px] lg:px-[150px] text-black shadow-left-down-blue-03';
  const contentStyles = 'w-full lg:w-[80%]';

  const titleStyles = 'mb-[20px] md:mb-[28px]';

  const itemContainerStyles =
    'border-solid border-black first-of-type:border-t-[2px]';
  const itemTitleStyles = 'w-[80%] text-left';
  const itemBodyStyles = 'textLg px-[8px] md:px-[16px] pb-[16px]';
  const buttonStyles =
    'w-full flex items-center justify-between py-[12px] md:py-[20px] px-[8px] md:px-[16px]';

  const handleItemClick = (itemId: string) => {
    if (itemId === expandedItem) {
      setExpandedItem('');
    } else {
      setExpandedItem(itemId);
    }
  };

  return (
    <div className={containerStyles}>
      <div className={contentStyles}>
        <h2 className={titleStyles}>{props.heading}</h2>
        {props.items.map((item) => {
          return (
            <>
              <h3
                key={item.id}
                className={`${itemContainerStyles} ${
                  item.id !== expandedItem && 'border-b-[2px]'
                }`}
              >
                <button
                  className={buttonStyles}
                  type="button"
                  aria-expanded="true"
                  aria-controls={`sect-${item.id}`}
                  data-testid={`sect-${item.id}`}
                  onClick={() => handleItemClick(item.id)}
                >
                  <span className={itemTitleStyles}>{item.title}</span>
                  <span>
                    {item.id === expandedItem ? <MinusIcon /> : <PlusIcon />}
                  </span>
                </button>
              </h3>
              <div
                role="region"
                aria-labelledby={item.id}
                hidden={item.id === expandedItem ? false : true}
                className={`${itemBodyStyles} ${
                  item.id === expandedItem &&
                  'border-b-[2px] border-solid border-black'
                }`}
                id={`sect-${item.id}`}
                data-testid={`reg-${item.id}`}
              >
                {item.body}
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Faq;
