import React from 'react';
import Card from './Card/Card';

interface IRelatedContentItem {
  id: string;
  imgSrc: string;
  tag: string;
  title: string;
  subtitle: string;
  buttonText: string;
}

interface IRelatedContentProps {
  title: string;
  items: IRelatedContentItem[];
}

const RelatedContent: React.FC<IRelatedContentProps> = (props) => {
  const containerStyles =
    'w-full bg-white text-black px-[16px] md:px-[48px] lg:px-[150px]';
  const contentStyles = `w-full ${
    props.items.length <= 2 ? 'flex' : 'grid'
  } grid-cols-2 gap-[24px] p-[16px] md:p-[24px] lg:py-[48px] lg:gap-y-[40px]`;
  const titleStyles =
    'w-[calc(100%-32px)] md:w-[calc(100%-48px)] border-b-[2px] border-solid border-black py-[8px] pt-[16px] md:pt-[26px] mx-[16px] md:mx-[24px] lg:pb-4';
  return (
    <div className={containerStyles}>
      <h2 className={titleStyles}>{props.title}</h2>
      <div className={contentStyles}>
        {props.items.map((item) => {
          return (
            <Card
              key={item.id}
              imgSrc={item.imgSrc}
              title={item.title}
              tag={item.tag}
              subTitle={item.subtitle}
              buttonText={item.buttonText}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RelatedContent;
