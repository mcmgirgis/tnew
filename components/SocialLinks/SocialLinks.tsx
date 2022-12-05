import { Facebook, Instagram, Twitter, YouTube } from 'iconoir-react';
import React from 'react';

interface SocialLinksProps {
  className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ className = '' }) => {
  const containerStyles = `flex items-center ${className}`;
  const iconStyles = `flex items-center justify-center text-black bg-white
    sm:min-h-[40px] md:min-h-[44px] sm:min-w-[40px] md:min-w-[44px] sm:h-10 md:h-11 sm:w-10 md:w-11
    px-1 hover:cursor-pointer rounded-[50%] md:ml-6 sm:ml-4 mt-[29px] hover:bg-blue-03 hover:text-white
    `;

  return (
    <div className={containerStyles}>
      <p className="sm:text-[13px] md:text-[1.1875rem] mt-[29px]">
        Connect With Us
      </p>
      <div className="flex items-center flex-wrap">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Facebook"
          className={iconStyles}
        >
          <Facebook />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Instagram"
          className={iconStyles}
        >
          <Instagram />
        </a>
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Youtube"
          className={iconStyles}
        >
          <YouTube />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noreferrer"
          aria-label="Twitter"
          className={iconStyles}
        >
          <Twitter />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
