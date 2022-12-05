import * as DOMPurify from 'dompurify';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import Button from '../Button/Button';

interface IFieldIamge {
  data: { meta: { alt: string } };
}

interface IFiftyFiftyRelationships {
  field_image: IFieldIamge;
}

interface IFiftyFiftyAttributes {
  field_title: string;
  field_padding_top?: boolean;
  field_padding_bottom?: boolean;
  field_image_position: string;
  field_display_option: number;
  field_body: { processed: string };
  field_cta_link: { title: string };
  field_cta_link_secondary?: { title: string };
  field_image_caption?: { processed: string };
  relationships: IFiftyFiftyRelationships;
}

interface IFiftyFiftyImageAttributes {
  uri: { url: string };
}

interface IFiftyFiftyProps {
  data: { attributes: IFiftyFiftyAttributes };
  imgData: { attributes: IFiftyFiftyImageAttributes };
}

const FiftyFifty: React.FC<IFiftyFiftyProps> = (props) => {
  const [useEqualWidth, setUseEqualWidth] = useState<boolean>(false);
  const { width } = useWindowDimensions();
  const imgContRef: React.MutableRefObject<HTMLElement | null> = useRef(null);

  const isMobileSize = width && width < 1024;

  const inverse = props.data.attributes.field_image_position === 'Left';
  const title = props.data.attributes.field_title;
  const buttonLabel = props.data.attributes.field_cta_link.title;
  const buttonLabelSecondary = props.data.attributes.field_cta_link_secondary
    ? props.data.attributes.field_cta_link_secondary.title
    : null;
  const sideToSide = props.data.attributes.field_display_option === 2;
  const body = DOMPurify.sanitize(props.data.attributes.field_body.processed);
  const imageCaption = props.data.attributes.field_image_caption
    ? DOMPurify.sanitize(props.data.attributes.field_image_caption.processed)
    : '';
  const imgUrl = props.imgData.attributes.uri.url;
  const altText = props.data.attributes.relationships.field_image.data.meta.alt;

  const getSideToSideSpacing = () => {
    return inverse ? 'md:pr-0' : 'md:pl-0';
  };

  const containerStyles = `max-w-[1920px] lg:mx-auto block h-auto md:flex py-[40px] px-[16px] md:px-[48px] lg:px-[150px] md:py-[80px] ${
    !sideToSide && `md:pt-[128px]`
  } bg-zinc-50 text-black`;
  const textContainerStyles = sideToSide
    ? `w-full md:min-h-[410px] md:w-2/4 mt-[30px] md:mt-0 md:relative md:py-[48px] bg-zinc-50 flex items-center md:px-[100px] ${getSideToSideSpacing()}`
    : `w-[calc(100%-32px)] md:min-h-[410px] relative -top-[16px] md:relative p-[32px] md:py-[48px] lg:py-[96px] flex items-center md:px-[64px] lg:px-[80px] bg-off-white ${
        isMobileSize && 'left-[32px]'
      } ${useEqualWidth ? 'md:w-2/4' : 'md:w-[44%] lg:w-2/4'}`;
  const textStyles =
    'textMd my-[8px] md:my-[24px] leading-[180%] md:leading-[200%]';
  const imageContainerStyles = `${
    sideToSide ? 'w-full' : 'w-[calc(100%-16px)]'
  } ${
    sideToSide || useEqualWidth ? 'md:w-2/4' : 'md:w-[56%] lg:w-2/4'
  } h-[250px] md:h-auto relative px-0`;

  const positionStyles = sideToSide ? '' : `md:left-[48px] md:-top-[48px]`;

  const imageCaptionStyles = 'absolute -bottom-[15px] text-xs leading-[130%]';

  const adaptImage = () => {
    const gap = 40;
    if (window.innerWidth > 1024 && imgContRef.current) {
      if (
        imgContRef.current.clientHeight >
        imgContRef.current.clientWidth + gap
      ) {
        setUseEqualWidth(true);
      } else {
        setUseEqualWidth(false);
      }
    }
  };

  useEffect(() => {
    adaptImage();
    window.addEventListener('resize', adaptImage);

    return (): void => window.removeEventListener('resize', adaptImage);
  }, []);

  return (
    <div className={`${containerStyles} ${!inverse && 'flex-row-reverse'}`}>
      <figure
        ref={imgContRef}
        className={`${imageContainerStyles} ${inverse && positionStyles}`}
      >
        <Image src={`${imgUrl}`} alt={altText} fill objectFit="cover" />
        {imageCaption && sideToSide && (
          <figcaption
            className={imageCaptionStyles}
            dangerouslySetInnerHTML={{ __html: imageCaption }}
          />
        )}
      </figure>
      <div
        className={`${textContainerStyles} ${
          !inverse ? positionStyles : 'md:top-0'
        }`}
      >
        <div>
          <h2 className="leading-[130%]">{title}</h2>
          <div
            className={`${textStyles}`}
            dangerouslySetInnerHTML={{ __html: body }}
          />
          <div className="flex">
            <Button variant={'black'} marginRight>
              {buttonLabel}
            </Button>
            {buttonLabelSecondary && (
              <Button variant={'bordered'}>{buttonLabelSecondary}</Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FiftyFifty;
