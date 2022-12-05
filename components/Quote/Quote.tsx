import React from 'react';

interface IQuoteProps {
  title: string;
  quote: string;
  link: { label: string; url: string };
}

const Quote: React.FC<IQuoteProps> = (props) => {
  const containerStyles =
    'w-full bg-black text-white py-[32px] md:py-[72px] px-[16px] md:px-[48px] lg:px-[150px] group hover:cursor-pointer';
  const titleStyles = 'text-center';
  const quoteStyles = 'mt-[16px] text-center';
  const ctaStyles =
    'textLg w-full flex justify-center mt-[8px] md:mt-[16px] group-hover:underline';

  return (
    <div className={containerStyles}>
      <h2 className={titleStyles}>{props.title}</h2>
      <h3 className={quoteStyles}>{props.quote}</h3>
      <p className={ctaStyles}>{props.link.label}</p>
    </div>
  );
};

export default Quote;
