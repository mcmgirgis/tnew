import Button from '@/components/Button/Button';
import ColumnList from '@/components/ColumnList/ColumnList';
import Heading from '@/components/Heading/Heading';
import { useTextField } from '@react-aria/textfield';
import { Cancel, Search as SearchIcon } from 'iconoir-react';
import React from 'react';

interface Results {
  label: string;
  url: string;
}

interface SearchProps {
  informationResults?: Results[];
  artResults?: Results[];
  variant: 'black' | 'white';
}

const Search: React.FC<SearchProps> = ({
  informationResults = [],
  artResults = [],
  variant,
}) => {
  const [search, setSearch] = React.useState<string>('');
  const [openSearch, setOpenSearch] = React.useState<boolean>(false);
  const inputRef: React.MutableRefObject<HTMLInputElement | null> =
    React.useRef(null);
  const { inputProps } = useTextField({}, inputRef);
  const handleSearchBox = () => {
    setOpenSearch((state) => !state);
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const buttonClassName = `${
    openSearch ? `${variant === 'black' ? '!text-white' : '!text-black'}` : ''
  } sm:text-[11px] md:text-[0px] lg:text-[19px] md:flex-row flex-col-reverse text-current hover:!text-current md:!ml-6 sm:!py-0 sm:!px-2 md:!p-1 lg:!px-4 lg:!ml-16`;

  return (
    <>
      <Button
        suffix={openSearch ? <Cancel /> : <SearchIcon />}
        suffixClassname={`pl-0 lg:pl-2 md:text-base sm:text-base sm:mb-1 md:mb-0 ${
          openSearch
            ? `${variant === 'black' ? '!text-white' : '!text-black'}`
            : ''
        }`}
        fontWeight="medium"
        onClick={handleSearchBox}
        classNames={buttonClassName}
        variant={openSearch ? 'yellow' : variant ? variant : 'transparent'}
      >
        {openSearch ? 'Close' : 'Search'}
      </Button>
      {openSearch && (
        <div className="md:none absolute sm:w-screen sm:-ml-4 md:ml-0 md:w-full md:px-36 p-4 md:pb-16 bg-white left-0 sm:top-[66px] md:top-[110px] transform transition-transform z-30">
          <div className="md:px-32 md:py-14 sm:h-[calc(100vh-106px)] md:h-auto p-6 bg-off-white sm:top-[66px] md:top-[110px]">
            <div className="relative">
              <input
                ref={inputRef}
                {...inputProps}
                className="w-full bg-transparent md:text-7xl text-4xl border-b-2 pb-6 border-black"
                type="text"
                value={search}
                placeholder="Search"
                onChange={handleSearch}
              />

              <Button
                variant={variant}
                classNames="absolute right-0 top-0 md:w-[88px] z-10 md:text-5xl text-xl"
              >
                <SearchIcon />
              </Button>
            </div>
            <div className="grid grid-cols-2 mt-8 text-black">
              <Heading variant="h2" label="Information:">
                <ColumnList
                  linkClassName="hover:border-black md:text-2xl"
                  list={informationResults}
                />
              </Heading>
              <Heading variant="h2" label="Art:">
                <ColumnList
                  linkClassName="hover:border-black md:text-2xl"
                  list={artResults}
                />
              </Heading>
            </div>
          </div>
          <div className="md:h-6 h-4 bg-yellow-02 w-90 -mt-2 md:-mt-3 md:-ml-6 md:mr-36 -ml-2 mr-16" />
        </div>
      )}
    </>
  );
};

export default Search;
