import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface ArtWorkCardProps {
  height?: number;
  width?: number;
  title: string;
  description: string;
  image: string;
  publicDomain?: string;
  cta?: string;
  url?: string;
  vertical?: boolean;
}

const PublicDomainIcon = () => (
  <svg
    width="81"
    height="28"
    viewBox="0 0 81 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="56" height="22" transform="translate(23.5 3)" fill="#6F6F6F" />
    <path
      d="M34.74 5.7H32.202V12H33.498V9.57H34.74C36.216 9.57 37.035 8.832 37.035 7.635C37.035 6.438 36.216 5.7 34.74 5.7ZM33.498 8.481V6.789H34.659C35.316 6.789 35.685 7.095 35.685 7.635C35.685 8.175 35.316 8.481 34.659 8.481H33.498ZM40.758 12.108C42.405 12.108 43.449 11.127 43.449 9.462V5.7H42.162V9.426C42.162 10.425 41.658 10.992 40.758 10.992C39.867 10.992 39.363 10.425 39.363 9.426V5.7H38.067V9.516C38.067 11.145 39.102 12.108 40.758 12.108ZM48.4732 8.688C49.1932 8.526 49.6612 8.049 49.6612 7.347C49.6612 6.393 48.8332 5.7 47.6002 5.7H44.9722V12H47.5642C49.0492 12 49.9492 11.325 49.9492 10.191C49.9492 9.39 49.4362 8.823 48.4732 8.688ZM48.3292 7.491C48.3292 7.932 47.9962 8.202 47.4472 8.202H46.2682V6.78H47.4472C47.9962 6.78 48.3292 7.05 48.3292 7.491ZM46.2682 10.92V9.282H47.5642C48.2032 9.282 48.5992 9.597 48.5992 10.101C48.5992 10.605 48.2032 10.92 47.5642 10.92H46.2682ZM52.4599 5.7H51.1639V12L55.2319 12.027V10.893L52.4599 10.866V5.7ZM57.6409 12V5.7H56.3449V12H57.6409ZM62.0041 12.108C63.4621 12.108 64.6771 11.244 64.9561 9.921H63.5881C63.3451 10.542 62.8231 10.992 62.0221 10.992C60.9511 10.992 60.2311 10.137 60.2311 8.85C60.2311 7.563 60.9781 6.708 62.0941 6.708C62.8951 6.708 63.4441 7.167 63.6241 7.761H64.9741C64.7491 6.447 63.6421 5.592 62.0941 5.592C60.2491 5.592 58.8811 6.897 58.8811 8.85C58.8811 10.803 60.2041 12.108 62.0041 12.108ZM34.632 14.7H32.202V21H34.632C36.675 21 37.899 19.803 37.899 17.85C37.899 15.897 36.675 14.7 34.632 14.7ZM33.498 19.884V15.816H34.587C35.874 15.816 36.549 16.554 36.549 17.85C36.549 19.146 35.874 19.884 34.587 19.884H33.498ZM42.0296 21.108C43.9286 21.108 45.2696 19.803 45.2696 17.85C45.2696 15.897 43.9286 14.592 42.0296 14.592C40.1306 14.592 38.8076 15.897 38.8076 17.85C38.8076 19.803 40.1306 21.108 42.0296 21.108ZM42.0296 19.992C40.9046 19.992 40.1576 19.119 40.1576 17.85C40.1576 16.581 40.9046 15.708 42.0296 15.708C43.1636 15.708 43.9196 16.581 43.9196 17.85C43.9196 19.119 43.1636 19.992 42.0296 19.992ZM47.6622 21V16.95C47.6622 16.554 47.6622 16.185 47.6442 15.69C47.7702 16.167 47.8782 16.5 47.9952 16.878L49.3002 21H50.4882L51.7932 16.878C51.9102 16.5 52.0182 16.167 52.1442 15.69C52.1262 16.185 52.1262 16.554 52.1262 16.95V21H53.3322V14.7H51.4152L50.1912 18.507C50.1012 18.795 50.0202 19.101 49.9302 19.452C49.8402 19.101 49.7592 18.795 49.6692 18.507L48.4452 14.7H46.5102V21H47.6622ZM60.6228 21L58.1838 14.7H56.6988L54.2598 21H55.6098L56.1228 19.569H58.7148L59.2368 21H60.6228ZM57.1038 16.797C57.2028 16.509 57.3108 16.194 57.4098 15.825C57.5088 16.194 57.6078 16.509 57.7158 16.797L58.3278 18.48H56.5098L57.1038 16.797ZM62.844 21V14.7H61.548V21H62.844ZM65.6232 21V17.049C65.6232 16.698 65.6232 16.356 65.6052 15.888C65.7852 16.32 65.9382 16.626 66.1002 16.941L68.1702 21H69.8352V14.7H68.6382V18.399C68.6382 18.75 68.6382 19.092 68.6562 19.56C68.4762 19.128 68.3232 18.822 68.1612 18.507L66.2172 14.7H64.4262V21H65.6232Z"
      fill="white"
    />
    <path
      d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z"
      fill="white"
    />
    <g clip-path="url(#clip0_8835_178295)">
      <path
        d="M14 24C19.5228 24 24 19.5228 24 14C24 8.47715 19.5228 4 14 4C8.47715 4 4 8.47715 4 14C4 19.5228 8.47715 24 14 24Z"
        stroke="#6F6F6F"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.7602 13.9887C18.7602 14.7633 18.6622 15.468 18.4662 16.1027C18.2796 16.728 17.9902 17.2693 17.5982 17.7267C17.2156 18.184 16.7209 18.534 16.1142 18.7767C15.5169 19.0193 14.8122 19.1407 14.0002 19.1407C13.5522 19.1407 13.1369 19.1033 12.7542 19.0287C12.3716 18.954 12.0216 18.842 11.7042 18.6927L11.0882 19.6167L9.98223 18.8747L10.5982 17.9507C10.1409 17.4933 9.80023 16.9287 9.57623 16.2567C9.35223 15.5847 9.24023 14.824 9.24023 13.9747C9.24023 12.9387 9.40823 12.038 9.74423 11.2727C10.0896 10.5073 10.6122 9.91466 11.3122 9.49466C12.0216 9.06532 12.9222 8.85066 14.0142 8.85066C14.4809 8.85066 14.9102 8.89266 15.3022 8.97666C15.6942 9.05132 16.0489 9.16799 16.3662 9.32666L16.9402 8.47266L18.0322 9.18666L17.4302 10.0827C17.8782 10.5307 18.2096 11.086 18.4242 11.7487C18.6482 12.4113 18.7602 13.158 18.7602 13.9887ZM16.5342 13.9887C16.5342 13.578 16.5062 13.2047 16.4502 12.8687C16.3942 12.5233 16.3056 12.22 16.1842 11.9587L12.7682 17.0967C12.9362 17.1807 13.1229 17.246 13.3282 17.2927C13.5336 17.3393 13.7576 17.3627 14.0002 17.3627C14.6069 17.3627 15.0922 17.2273 15.4562 16.9567C15.8296 16.686 16.1002 16.2987 16.2682 15.7947C16.4456 15.2907 16.5342 14.6887 16.5342 13.9887ZM11.4662 13.9887C11.4662 14.4087 11.4942 14.796 11.5502 15.1507C11.6156 15.5053 11.7136 15.818 11.8442 16.0887L15.3022 10.9227C15.1249 10.82 14.9289 10.7453 14.7142 10.6987C14.4996 10.6427 14.2662 10.6147 14.0142 10.6147C13.4169 10.6147 12.9316 10.75 12.5582 11.0207C12.1849 11.2913 11.9096 11.6787 11.7322 12.1827C11.5549 12.6867 11.4662 13.2887 11.4662 13.9887Z"
        fill="#6F6F6F"
      />
    </g>
    <defs>
      <clipPath id="clip0_8835_178295">
        <rect width="24" height="24" fill="white" transform="translate(2 2)" />
      </clipPath>
    </defs>
  </svg>
);

const ArtWorkCardWrapper: React.FC<{
  url?: string;
  onMouseEnter: (state: boolean) => void;
  children?: React.ReactChild;
}> = ({ url, children, onMouseEnter }) =>
  url ? (
    <div className="w-fit">
      <Link legacyBehavior href={url}>
        <a
          onMouseEnter={() => onMouseEnter(true)}
          onMouseLeave={() => onMouseEnter(false)}
          className={`${url ? 'text-blue-02' : ''}`}
        >
          {children}
        </a>
      </Link>
    </div>
  ) : (
    <>{children}</>
  );

const ArtWorkCard: React.FC<ArtWorkCardProps> = (props) => {
  const [underline, setUnderline] = React.useState<boolean>(false);
  const {
    title,
    description,
    vertical = true,
    image,
    cta,
    url = '',
    publicDomain,
    ...rest
  } = props;
  const handleMouseEnter = (state: boolean) => {
    if (!state) {
      setUnderline(false);
    } else {
      setUnderline(true);
    }
  };
  return (
    <ArtWorkCardWrapper onMouseEnter={handleMouseEnter} url={url}>
      <div
        className={`relative group text-black w-full break-inside ${
          vertical ? 'inline-block' : 'flex flex-row'
        }`}
      >
        <figure
          className="
            relative w-full md:block mb-3 mr-6 overflow-hidden
            transform group-hover:translate-x-0 group-hover:shadow
            group-hover:translate-y-0 transition duration-700 ease-out"
        >
          <div className="w-full h-full object-cover transform group-hover:scale-105 transition duration-700 ease-out cursor-pointer">
            <Image alt="art" src={image} {...rest} />
          </div>
        </figure>
        <div
          className={`${
            vertical
              ? 'pb-[44px]'
              : 'flex flex-col ml-6 justify-center pb-[44px]'
          }`}
        >
          <h3
            className={`${vertical ? 'mt-4' : ''} mb-1 font-medium ${
              underline ? 'text-blue-02 underline' : 'text-black'
            }`}
          >
            {title}
          </h3>
          <span className="text-lg text-black">{description}</span>
          {publicDomain ? (
            <div className="flex items-center text-black">
              <span className="text-lg">{publicDomain}</span>
              {<PublicDomainIcon />}
            </div>
          ) : null}
          <span
            className={`text-lg font-bold ${
              underline ? 'text-blue-02 underline' : 'text-grey-03'
            }`}
          >
            {cta}
          </span>
        </div>
      </div>
    </ArtWorkCardWrapper>
  );
};

export default ArtWorkCard;
