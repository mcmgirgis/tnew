import { useRouter } from 'next/router';
import React, { useState } from 'react';

const SearchPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleClick = () => {
    router.push({
      pathname: 'art/collection/[search]',
      query: { search: searchTerm },
    });
  };

  return (
    <div>
      <input onChange={handleOnChange} />
      <button onClick={handleClick}>Search</button>
    </div>
  );
};

export default SearchPage;
