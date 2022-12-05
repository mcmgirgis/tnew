import React from 'react';
import Newsletter from './Newsletter';

const NewsletterWrapper: React.FC<{ className?: string }> = ({
  className = '',
}) => {
  const [email, setEmail] = React.useState<string>('');

  const handleEmail = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value);
    },
    []
  );

  return (
    <form
      method="GET"
      action="https://pages.wordfly.com/clevelandmuseumofart/pages/Subscribe/"
      target="_blank"
      className={className}
    >
      <Newsletter value={email} onChange={handleEmail} />
    </form>
  );
};

export default NewsletterWrapper;
