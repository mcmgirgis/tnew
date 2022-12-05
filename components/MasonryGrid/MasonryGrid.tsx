import React from 'react';

interface MasonryGridProps {
  list: React.ReactChild[];
}

const MasonryGrid: React.FC<MasonryGridProps> = ({ list = [] }) => {
  return (
    <div className="w-full sm:columns-2 md:columns-3 lg:columns-4 gap-8 bg-white p-8">
      {list.map((element: React.ReactChild, idx: number) => {
        return (
          <div
            key={idx}
            className="relative py-2 inline-block group text-black w-full break-inside"
          >
            {element}
          </div>
        );
      })}
    </div>
  );
};

export default MasonryGrid;
