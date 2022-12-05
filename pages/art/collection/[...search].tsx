import { NextPage, NextPageContext } from 'next';
import Image from 'next/image';
import { SearchResult } from '../../../types/search';

interface SearchCollectionPageProps {
  data: SearchResult[];
}

const SearchCollectionPage: NextPage<SearchCollectionPageProps> = ({
  data,
}) => (
  <div>
    {data.map((result: any, idx: number) => {
      return (
        <div key={idx}>
          {result.images ? (
            <Image
              width={result.images.web.width}
              height={result.images.web.height}
              alt={result.images.web.filename}
              src={result.images.web.url}
            />
          ) : null}
          <div>{result.title}</div>
          <div>{result.tombstone}</div>
        </div>
      );
    })}
  </div>
);

const fetchData = async (searchTerm: string) =>
  await (
    await fetch(
      `https://openaccess-api.clevelandart.org/api/artworks/?q=${searchTerm}`
    )
  ).json();

export async function getServerSideProps(context: NextPageContext) {
  const res = await fetchData(context.query.search as string);
  const resultFiltered = res.data.map((r: SearchResult) => {
    return {
      id: r.id,
      images: r.images,
      title: r.title,
      tombstone: r.tombstone,
    };
  });

  return {
    props: {
      data: resultFiltered,
    },
  };
}

export default SearchCollectionPage;
