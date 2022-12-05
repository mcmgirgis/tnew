import Link from 'next/link';
import React from 'react';

interface Tab {
  label: string;
  url: string;
  color?: string;
}

interface HeaderMainNavigationProps {
  tabs?: Tab[];
  classNames?: string;
  linkClassNames?: string;
  underlineClassName?: string;
  size?: 'base' | 'large';
  onMouseEnter?: (tab: number, color: string) => void;
}

const HeaderMainNavigation: React.FC<HeaderMainNavigationProps> = ({
  tabs = [],
  size = 'base',
  classNames = '',
  linkClassNames = '',
  underlineClassName = '',
  onMouseEnter,
}) => {
  return (
    <div className={`text-current flex ${classNames}`}>
      {tabs.map((tab, index) => {
        const borderColor = tab.color ? `bg-${tab.color}` : 'bg-current';
        const className = `relative cursor-default mx-3 first-of-type:ml-0 last-of-type:mr-0 font-medium relative group ${
          size === 'base' ? 'text-xl' : 'text-2xl'
        } ${linkClassNames}`;
        return (
          <Link key={`${tab.label}-${index + 1}`} legacyBehavior href={tab.url}>
            <a
              onMouseEnter={() =>
                onMouseEnter && onMouseEnter(index + 1, tab.color || 'current')
              }
              className={className}
            >
              {tab.label}
              <span
                className={`absolute -bottom-2 left-0 w-0 h-1 transition-all group-hover:w-full ${borderColor} ${underlineClassName}`}
              />
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default HeaderMainNavigation;
