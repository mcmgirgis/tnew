import Link from 'next/link';

export interface List {
  label: string;
  url: string;
}

interface ColumnListProps {
  list: List[];
  className?: string;
  linkClassName?: string;
  animatedUnderline?: boolean;
  underlineClasseName?: string;
  onMouseEnter?: (index: number) => void;
}

const ColumnList = ({
  list,
  className = '',
  linkClassName = '',
  underlineClasseName = '',
  onMouseEnter,
  animatedUnderline,
}: ColumnListProps) => {
  const handleMouseEnter = (index: number) => {
    if (!onMouseEnter) return;
    onMouseEnter(index);
  };
  const underlineClasses = `hover:border-b-1 border-current w-fit ${underlineClasseName}`;
  return (
    <div className={`flex flex-col ${className}`}>
      {list.map(({ label, url }, index) => (
        <Link legacyBehavior key={`${label}-${index}`} href={url}>
          <a
            onMouseEnter={() => handleMouseEnter(index + 1)}
            className={`relative group mb-2 lg:mb-3 sm:text-[13px] md:text-base lg:text-[1.1875rem] sm:leading-[160%] md:leading-[180%] last-of-type:pb-0 w-fit hover:border-b-2 hover:mb-1.5 hover:lg:mb-2.5 border-blue-04 ${linkClassName}`}
          >
            {label}
            {animatedUnderline && (
              <span
                className={`absolute -bottom-0.5 left-0 w-0 h-1 transition-all group-hover:w-full bg-current ${underlineClasses}`}
              />
            )}
          </a>
        </Link>
      ))}
    </div>
  );
};

export default ColumnList;
