import Card from '@/components/ContentCard/ContentCard';
import React from 'react';
import Button from '../Button/Button';

interface IContentCard {
  id: string;
  imgUrl: string;
  specialTags?: string[];
  tags?: string[];
  body: string;
  additionalInfo?: string;
  additionalInfo2?: string;
  additionalBody?: string;
  title: string;
  cta?: { label: string };
}

interface IMultiColumnGridProps {
  title: string;
  items: IContentCard[];
  cta?: string;
  gridMaxColumns: '3' | '4';
  background: 'purple' | 'blue';
}

const MultiColumnGrid: React.FC<IMultiColumnGridProps> = (props) => {
  const containerStyles =
    'w-full bg-white text-black px-[16px] md:px-[48px] lg:px-[150px]';
  const titleStyles =
    'relative w-full border-b-[2px] border-solid border-black py-[8px] pt-[16px] md:pt-[26px]';
  const gridStyles = `${
    props.items.length <= 2 ? 'flex' : 'grid'
  } gap-[16px] md:gap-[24px] py-[16px] md:py-[24px] md:py-[48px] grid-cols-2 ${
    props.gridMaxColumns === '3' || props.items.length === 3
      ? 'md:grid-cols-3'
      : 'md:grid-cols-4'
  }`;
  const themeStyles = `w-[29%] md:w-[39%] aspect-[1/1.35] md:aspect-[2/1] ${
    props.background === 'purple' ? 'bg-purple-03' : 'bg-blue-03'
  } absolute right-0 top-[40px]`;
  const buttonContainerStyles =
    'w-full flex justify-center pb-[16px] md:pb-[24px]';
  return (
    <div className={containerStyles}>
      <div className={themeStyles} />
      <h2 className={titleStyles}>{props.title}</h2>
      <div className={gridStyles}>
        {props.items.map((item) => {
          return (
            <Card
              key={item.id}
              imgUrl={item.imgUrl}
              specialTags={item.specialTags}
              tags={item.tags}
              body={item.body}
              additionalInfo={item.additionalInfo}
              additionalInfo2={item.additionalInfo2}
              additionalBody={item.additionalBody}
              title={item.title}
              cta={item.cta}
            />
          );
        })}
      </div>
      {props.cta && (
        <div className={buttonContainerStyles}>
          <Button>{props.cta}</Button>
        </div>
      )}
    </div>
  );
};

export default MultiColumnGrid;
