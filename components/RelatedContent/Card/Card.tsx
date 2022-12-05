import Button from '@/components/Button/Button';
import Tag from '@/components/Tag/Tag';
import Image from 'next/image';
import React from 'react';

interface IRelatedContentCardProps {
  imgSrc: string;
  title: string;
  subTitle: string;
  tag: string;
  buttonText: string;
}

const RelatedContentCard: React.FC<IRelatedContentCardProps> = (props) => {
  const containerStyles = 'md:flex hover:cursor-pointer group';
  const imgStyles =
    'relative h-[56px] w-[76px] md:h-[122px] md:w-[152px] lg:h-[181px] lg:w-[248px] shrink-0';
  const contentStyles = 'mt-[16px] md:mt-0 md:pl-[24px]';
  const titleStyles = 'my-[4px] group-hover:text-blue-02 group-hover:underline';
  const subtitleStyles = 'textMd lg:my-[4px]';
  const ButtonStyles = 'textMd font-bold group-hover:text-blue-02';

  return (
    <div className={containerStyles}>
      <div className={imgStyles}>
        <Image src={props.imgSrc} alt={''} fill />
      </div>
      <div className={contentStyles}>
        <Tag variant="bordered-black-sm" label={props.tag} />
        <h3 className={titleStyles}>{props.title}</h3>
        <span className={subtitleStyles}>{props.subTitle}</span>
        <div className={ButtonStyles}>
          <Button variant="transparent" removePaddingX size="sm">
            {props.buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default RelatedContentCard;
