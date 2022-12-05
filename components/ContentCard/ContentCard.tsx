import Button from '@/components/Button/Button';
import Tag from '@/components/Tag/Tag';
import Image from 'next/image';
import React from 'react';
import LinkIcon from './Icons/Link';

interface IContentCardProps {
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

const ContentCard: React.FC<IContentCardProps> = (props) => {
  const containerStyles = 'w-full hover:cursor-pointer group';
  const imgStyles =
    'relative w-full h-[118px] md:h-[280px] overflow-hidden transform group-hover:translate-x-0 group-hover:shadow group-hover:translate-y-0 transition duration-700 ease-out';
  const contentStyles = 'p-[4px] md:p-[8px] md:p-[12px] bg-white text-black';
  const tagsStyles = 'text-xs md:text-sm flex flex-wrap';
  const titleStyles =
    'group-hover:text-blue-02 group-hover:underline mb-[4px] md:mb-[8px]';
  const bodyStyles = 'mb-[4px] md:mb-[8px]';
  const additionalInfoStyles = 'textSm mb-[4px] md:mb-[8px]';
  const buttonStyles = 'text-xs md:text-sm';
  const iconStyles = 'ml-[6px]';

  return (
    <div className={containerStyles}>
      <div className={imgStyles}>
        <div className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-out cursor-pointer">
          <Image src={`${props.imgUrl}`} alt={'alt'} fill objectFit="cover" />
        </div>
      </div>
      <div className={contentStyles}>
        <div className={tagsStyles}>
          {props.specialTags &&
            props.specialTags.map((tag) => {
              return (
                <Tag
                  key={tag}
                  label={tag}
                  variant="special"
                  applyMarginBottom
                />
              );
            })}
          {props.tags &&
            props.tags.map((tag) => {
              return (
                <Tag
                  key={tag}
                  label={tag}
                  variant="bordered-black-sm"
                  applyMarginBottom
                />
              );
            })}
        </div>
        <h3 className={titleStyles}>{props.title}</h3>
        <p className={`${'textMd'} ${bodyStyles}`}>{props.body}</p>
        {props.additionalInfo && (
          <p className={additionalInfoStyles}>{props.additionalInfo}</p>
        )}
        {props.additionalInfo2 && (
          <p className={additionalInfoStyles}>{props.additionalInfo2}</p>
        )}
        {props.additionalBody && (
          <p className={`${'textMd'} ${bodyStyles}`}>{props.additionalBody}</p>
        )}
        {props.cta && (
          <div className={buttonStyles}>
            <Button variant="transparent" removePaddingX size="sm">
              <>
                {props.cta.label}{' '}
                <div className={iconStyles}>
                  <LinkIcon />
                </div>
              </>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentCard;
