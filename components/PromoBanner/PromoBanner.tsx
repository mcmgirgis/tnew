import Heading from '@/components/Heading/Heading';
import Tag from '@/components/Tag/Tag';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export interface PromoBannerProps {
  backgroundImage?: string;
  paddless?: boolean;
  label: string;
  description: string;
  tags?: string[];
  cta?: {
    label: string;
    url: string;
  };
}

const PromoBanner: React.FC<PromoBannerProps> = (props) => {
  const {
    label,
    description,
    tags = [],
    cta,
    backgroundImage = '',
    paddless,
  } = props;
  const paddingClassName = paddless ? '' : 'px-6 py-12 md:px-32 md:py-20';
  const imageClassName = `bg-no-repeat bg-cover px-6 py-12 md:px-32 :py-20 relative`;

  return (
    <div
      data-testid="promobanner"
      className={`relative ${imageClassName} ${paddingClassName}`}
    >
      <Image
        className="object-cover object-center w-full h-full"
        src={backgroundImage}
        fill
        alt="background"
      />

      <div className="z-20 relative">
        <div className="flex mb-9">
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
        <Heading variant="h2" label={label}>
          <span className="text-base md:text-2xl">{description}</span>
          <>
            {cta ? (
              <Link legacyBehavior href={cta.url}>
                <a className="mt-4 w-fit text-black px-6 py-3 md:px-8 md:py-4 sm:text-xs md:text-base lg:text-lg font-bold bg-white">
                  {cta.label}
                </a>
              </Link>
            ) : null}
          </>
        </Heading>
      </div>
      <div className="absolute opacity-60 w-full h-full top-0 left-0 bg-black z-10" />
    </div>
  );
};

export default PromoBanner;
