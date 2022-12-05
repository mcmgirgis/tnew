import React from 'react';
import ReactPlayer from 'react-player';
import Button from '../Button/Button';
import Tag from '../Tag/Tag';

interface IVideoFiftyFiftyProps {
  title: string;
  body: string;
  cta: string;
  imgSrc: string;
  imgAlt: string;
  videoUrl: string;
  tag?: string;
}

const VideoFiftyFifty: React.FC<IVideoFiftyFiftyProps> = (props) => {
  const containerStyles =
    'w-full h-auto md:h-[45vw] flex items-center justify-center bg-white px-[16px] md:px-[48px] lg:px-[150px]';
  const contentStyles =
    'h-auto w-full py-[40px] px-[16px] md:py-0 md:px-0 block md:h-4/5 md:w-[85%] md:flex';
  const imgStyles = 'w-full h-[200px] md:h-full relative md:w-[70%]';
  const textContainerStyles =
    'w-full md:w-[30%] pt-[36px] md:pt-0 pl-0 md:pl-[75px] flex items-end';

  const titleStyles = 'py-[15px] text-black';
  const textStyles = 'textLg pb-[15px] text-black';

  return (
    <div className={containerStyles}>
      <div className={contentStyles}>
        <div className={imgStyles}>
          <ReactPlayer
            url={props.videoUrl}
            light={props.imgSrc}
            controls
            width="100%"
            height="100%"
          />
        </div>
        <div className={textContainerStyles}>
          <div>
            {props.tag && <Tag variant="bordered-black-sm" label={props.tag} />}
            <h2 className={titleStyles}>{props.title}</h2>
            <p className={textStyles}>{props.body}</p>
            <Button>{props.cta}</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoFiftyFifty;
