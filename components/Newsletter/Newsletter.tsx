import Button from '@/components/Button/Button';
import TextInput from '@/components/Forms/TextInput/TextInput';
import Heading from '@/components/Heading/Heading';
import SocialLinks from '@/components/SocialLinks/SocialLinks';
import React from 'react';

interface NewsletterProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Newsletter: React.FC<NewsletterProps> = (props) => (
  <Heading label="Sign Up for Our Newsletter">
    <div className="flex relative">
      <TextInput
        label="Email Address"
        name="email"
        type="email"
        required
        id="wordfly-email"
        inputClassName="pr-24 w-full"
        {...props}
      />
      <Button
        classNames="absolute right-0.5 top-0.5 md:h-[52px] h-9 z-10 bg-black border-white border-2"
        type="submit"
      >
        Submit
      </Button>
    </div>
    <SocialLinks />
  </Heading>
);

export default Newsletter;
