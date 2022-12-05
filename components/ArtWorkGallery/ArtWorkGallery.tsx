import Link from 'next/link';
import React from 'react';
import Button from '../Button/Button';
import Heading from '../Heading/Heading';
import MasonryGrid from '../MasonryGrid/MasonryGrid';

interface ArtWorkGalleryProps {
  list: React.ReactChild[];
  heading: string;
  url: string;
}

const ArtWorkGallery: React.FC<ArtWorkGalleryProps> = ({
  list,
  heading,
  url,
}) => {
  return (
    <div className="bg-white flex flex-col">
      <Heading
        className="text-black border-b-2 border-black mx-8 pt-4 sm:mb-0 w-auto"
        label={heading}
        variant="h2"
      ></Heading>
      <MasonryGrid list={list} />
      <Link legacyBehavior href={url}>
        <Button classNames="mx-auto mb-4" size="lg" variant="black">
          Browse More Art
        </Button>
      </Link>
    </div>
  );
};

export default ArtWorkGallery;
