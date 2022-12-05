import Button from '@/components/Button/Button';
import HeaderMainNavigation from '@/components/HeaderMainNavigation/HeaderMainNavigation';
import HeaderMainNavigationMenu from '@/components/HeaderMainNavigationMenu/HeaderMainNavigationMenu';
import MobileMenu from '@/components/MobileMenu/MobileMenuWrapper';
import Search from '@/components/Search/Search';
import { User } from 'iconoir-react';
import React from 'react';
import Header from './Header';

interface HeaderWrapperProps {
  variant?: 'white' | 'black';
}

const mockData = [
  {
    type: 'menu_link_content--menu_link_content',
    id: 'menu_link_content:74777872-580f-4db4-9408-ac4c802a53de',
    attributes: {
      description: 'Art Link',
      enabled: true,
      expanded: false,
      menu_name: 'main',
      meta: { entity_id: '1' },
      options: [],
      parent: '',
      provider: 'menu_link_content',
      route: { name: '\u003Cfront\u003E', parameters: [] },
      title: 'Art',
      url: '/',
      weight: '-50',
    },
  },
  {
    type: 'menu_link_content--menu_link_content',
    id: 'menu_link_content:642b0371-8d12-4b29-8c24-c215b11e9ad6',
    attributes: {
      description: 'Collection Online Landing Page',
      enabled: true,
      expanded: false,
      menu_name: 'main',
      meta: { entity_id: '2' },
      options: [],
      parent: 'menu_link_content:74777872-580f-4db4-9408-ac4c802a53de',
      provider: 'menu_link_content',
      route: { name: '\u003Cfront\u003E', parameters: [] },
      title: 'Collection Online',
      url: '/',
      weight: '0',
    },
  },
  {
    type: 'menu_link_content--menu_link_content',
    id: 'menu_link_content:642b0371-8d12-4b29-8c24-c215b11e9ad6',
    attributes: {
      description: 'Collection Online Landing Page',
      enabled: true,
      expanded: false,
      menu_name: 'main',
      meta: { entity_id: '2' },
      options: [],
      parent: 'menu_link_content:74777872-580f-4db4-9408-ac4c802a53de',
      provider: 'menu_link_content',
      route: { name: '\u003Cfront\u003E', parameters: [] },
      title: 'Open Access',
      url: '/',
      weight: '0',
    },
  },
  {
    type: 'menu_link_content--menu_link_content',
    id: 'menu_link_content:642b0371-8d12-4b29-8c24-c215b11e9ad6',
    attributes: {
      description: 'Collection Online Landing Page',
      enabled: true,
      expanded: false,
      menu_name: 'main',
      meta: { entity_id: '2' },
      options: [],
      parent: 'menu_link_content:74777872-580f-4db4-9408-ac4c802a53de',
      provider: 'menu_link_content',
      route: { name: '\u003Cfront\u003E', parameters: [] },
      title: 'Read, Watch, Listen',
      url: '/',
      weight: '0',
    },
  },
  {
    type: 'menu_link_content--menu_link_content',
    id: 'menu_link_content:9c2e264e-83a3-478b-9a17-ac400811399a',
    attributes: {
      description: 'Experiments Lending Page',
      enabled: true,
      expanded: false,
      menu_name: 'main',
      meta: { entity_id: '3' },
      options: [],
      parent: 'menu_link_content:74777872-580f-4db4-9408-ac4c802a53de',
      provider: 'menu_link_content',
      route: { name: '\u003Cfront\u003E', parameters: [] },
      title: 'Experiments',
      url: '/',
      weight: '0',
    },
  },
  {
    type: 'menu_link_content--menu_link_content',
    id: 'menu_link_content:6fb6415e-2acf-4d39-82ac-59368e87edd0',
    attributes: {
      description: 'What\u0027s On Landing Page',
      enabled: true,
      expanded: false,
      menu_name: 'main',
      meta: { entity_id: '4' },
      options: [],
      parent: '',
      provider: 'menu_link_content',
      route: { name: '\u003Cnolink\u003E', parameters: [] },
      title: 'What\u0027s On',
      url: '',
      weight: '-49',
    },
  },

  {
    type: 'menu_link_content--menu_link_content',
    id: 'menu_link_content:642b0371-8d12-4b29-8c24-c215b11e9ad6',
    attributes: {
      description: 'Collection Online Landing Page',
      enabled: true,
      expanded: false,
      menu_name: 'main',
      meta: { entity_id: '2' },
      options: [],
      parent: 'menu_link_content:6fb6415e-2acf-4d39-82ac-59368e87edd0',
      provider: 'menu_link_content',
      route: { name: '\u003Cfront\u003E', parameters: [] },
      title: 'See All',
      url: '/',
      weight: '0',
    },
  },
  {
    type: 'menu_link_content--menu_link_content',
    id: 'menu_link_content:642b0371-8d12-4b29-8c24-c215b11e9ad6',
    attributes: {
      description: 'Collection Online Landing Page',
      enabled: true,
      expanded: false,
      menu_name: 'main',
      meta: { entity_id: '2' },
      options: [],
      parent: 'menu_link_content:6fb6415e-2acf-4d39-82ac-59368e87edd0',
      provider: 'menu_link_content',
      route: { name: '\u003Cfront\u003E', parameters: [] },
      title: 'Exhibitions',
      url: '/',
      weight: '0',
    },
  },

  {
    type: 'menu_link_content--menu_link_content',
    id: 'menu_link_content:642b0371-8d12-4b29-8c24-c215b11e9ad6',
    attributes: {
      description: 'Collection Online Landing Page',
      enabled: true,
      expanded: false,
      menu_name: 'main',
      meta: { entity_id: '2' },
      options: [],
      parent: 'menu_link_content:6fb6415e-2acf-4d39-82ac-59368e87edd0',
      provider: 'menu_link_content',
      route: { name: '\u003Cfront\u003E', parameters: [] },
      title: 'Events',
      url: '/',
      weight: '0',
    },
  },

  {
    type: 'menu_link_content--menu_link_content',
    id: 'menu_link_content:642b0371-8d12-4b29-8c24-c215b11e9ad6',
    attributes: {
      description: 'Collection Online Landing Page',
      enabled: true,
      expanded: false,
      menu_name: 'main',
      meta: { entity_id: '2' },
      options: [],
      parent: 'menu_link_content:6fb6415e-2acf-4d39-82ac-59368e87edd0',
      provider: 'menu_link_content',
      route: { name: '\u003Cfront\u003E', parameters: [] },
      title: 'Classes and Workshops',
      url: '/',
      weight: '0',
    },
  },

  {
    type: 'menu_link_content--menu_link_content',
    id: 'menu_link_content:642b0371-8d12-4b29-8c24-c215b11e9ad6',
    attributes: {
      description: 'Collection Online Landing Page',
      enabled: true,
      expanded: false,
      menu_name: 'main',
      meta: { entity_id: '2' },
      options: [],
      parent: 'menu_link_content:6fb6415e-2acf-4d39-82ac-59368e87edd0',
      provider: 'menu_link_content',
      route: { name: '\u003Cfront\u003E', parameters: [] },
      title: 'Lectures',
      url: '/',
      weight: '0',
    },
  },

  {
    type: 'menu_link_content--menu_link_content',
    id: 'menu_link_content:642b0371-8d12-4b29-8c24-c215b11e9ad6',
    attributes: {
      description: 'Collection Online Landing Page',
      enabled: true,
      expanded: false,
      menu_name: 'main',
      meta: { entity_id: '2' },
      options: [],
      parent: 'menu_link_content:6fb6415e-2acf-4d39-82ac-59368e87edd0',
      provider: 'menu_link_content',
      route: { name: '\u003Cfront\u003E', parameters: [] },
      title: 'Perfomances',
      url: '/',
      weight: '0',
    },
  },

  {
    type: 'menu_link_content--menu_link_content',
    id: 'menu_link_content:642b0371-8d12-4b29-8c24-c215b11e9ad6',
    attributes: {
      description: 'Collection Online Landing Page',
      enabled: true,
      expanded: false,
      menu_name: 'main',
      meta: { entity_id: '2' },
      options: [],
      parent: 'menu_link_content:6fb6415e-2acf-4d39-82ac-59368e87edd0',
      provider: 'menu_link_content',
      route: { name: '\u003Cfront\u003E', parameters: [] },
      title: 'Tours',
      url: '/',
      weight: '0',
    },
  },

  {
    type: 'menu_link_content--menu_link_content',
    id: 'menu_link_content:642b0371-8d12-4b29-8c24-c215b11e9ad6',
    attributes: {
      description: 'Collection Online Landing Page',
      enabled: true,
      expanded: false,
      menu_name: 'main',
      meta: { entity_id: '2' },
      options: [],
      parent: 'menu_link_content:6fb6415e-2acf-4d39-82ac-59368e87edd0',
      provider: 'menu_link_content',
      route: { name: '\u003Cfront\u003E', parameters: [] },
      title: 'Members Only',
      url: '/',
      weight: '0',
    },
  },
  {
    type: 'menu_link_content--menu_link_content',
    id: 'menu_link_content:642b0371-8d12-4b29-8c24-c215b11e9ad6',
    attributes: {
      description: 'Collection Online Landing Page',
      enabled: true,
      expanded: false,
      menu_name: 'main',
      meta: { entity_id: '2' },
      options: [],
      parent: 'menu_link_content:dc9c5d12-abc9-498d-9f0e-83bf4bd3288e',
      provider: 'menu_link_content',
      route: { name: '\u003Cfront\u003E', parameters: [] },
      title: 'Plan Your Visit',
      url: '/',
      weight: '0',
    },
  },

  {
    type: 'menu_link_content--menu_link_content',
    id: 'menu_link_content:642b0371-8d12-4b29-8c24-c215b11e9ad6',
    attributes: {
      description: 'Collection Online Landing Page',
      enabled: true,
      expanded: false,
      menu_name: 'main',
      meta: { entity_id: '2' },
      options: [],
      parent: 'menu_link_content:dc9c5d12-abc9-498d-9f0e-83bf4bd3288e',
      provider: 'menu_link_content',
      route: { name: '\u003Cfront\u003E', parameters: [] },
      title: 'ArtLens Gallery',
      url: '/',
      weight: '0',
    },
  },
  {
    type: 'menu_link_content--menu_link_content',
    id: 'menu_link_content:642b0371-8d12-4b29-8c24-c215b11e9ad6',
    attributes: {
      description: 'Collection Online Landing Page',
      enabled: true,
      expanded: false,
      menu_name: 'main',
      meta: { entity_id: '2' },
      options: [],
      parent: 'menu_link_content:dc9c5d12-abc9-498d-9f0e-83bf4bd3288e',
      provider: 'menu_link_content',
      route: { name: '\u003Cfront\u003E', parameters: [] },
      title: 'Ingalls Gallery',
      url: '/',
      weight: '0',
    },
  },
  {
    type: 'menu_link_content--menu_link_content',
    id: 'menu_link_content:642b0371-8d12-4b29-8c24-c215b11e9ad6',
    attributes: {
      description: 'Collection Online Landing Page',
      enabled: true,
      expanded: false,
      menu_name: 'main',
      meta: { entity_id: '2' },
      options: [],
      parent: 'menu_link_content:dc9c5d12-abc9-498d-9f0e-83bf4bd3288e',
      provider: 'menu_link_content',
      route: { name: '\u003Cfront\u003E', parameters: [] },
      title: 'Group Visits',
      url: '/',
      weight: '0',
    },
  },
  {
    type: 'menu_link_content--menu_link_content',
    id: 'menu_link_content:642b0371-8d12-4b29-8c24-c215b11e9ad6',
    attributes: {
      description: 'Collection Online Landing Page',
      enabled: true,
      expanded: false,
      menu_name: 'main',
      meta: { entity_id: '2' },
      options: [],
      parent: 'menu_link_content:dc9c5d12-abc9-498d-9f0e-83bf4bd3288e',
      provider: 'menu_link_content',
      route: { name: '\u003Cfront\u003E', parameters: [] },
      title: 'Community Arts Center',
      url: '/',
      weight: '0',
    },
  },
  {
    type: 'menu_link_content--menu_link_content',
    id: 'menu_link_content:642b0371-8d12-4b29-8c24-c215b11e9ad6',
    attributes: {
      description: 'Collection Online Landing Page',
      enabled: true,
      expanded: false,
      menu_name: 'main',
      meta: { entity_id: '2' },
      options: [],
      parent: 'menu_link_content:dc9c5d12-abc9-498d-9f0e-83bf4bd3288e',
      provider: 'menu_link_content',
      route: { name: '\u003Cfront\u003E', parameters: [] },
      title: 'Transformer Station',
      url: '/',
      weight: '0',
    },
  },
  {
    type: 'menu_link_content--menu_link_content',
    id: 'menu_link_content:dc9c5d12-abc9-498d-9f0e-83bf4bd3288e',
    attributes: {
      description: 'Visits Landing Page',
      enabled: true,
      expanded: false,
      menu_name: 'main',
      meta: { entity_id: '5' },
      options: [],
      parent: '',
      provider: 'menu_link_content',
      route: { name: '\u003Cnolink\u003E', parameters: [] },
      title: 'Visit',
      url: '',
      weight: '-48',
    },
  },
];

interface MenuItems {
  label: string;
  items: { label: string; url: string }[];
}

const getFormattedData = (
  tabs: {
    id: string;
    attributes: { parent: string; title: string; url: string };
  }[]
): MenuItems[] => {
  const parents = tabs.filter((tab) => !tab.attributes.parent);
  const data = parents.map((tab) => {
    const childrens = tabs.reduce(
      (acc: { label: string; url: string }[], children) => {
        return children.attributes.parent === tab.id
          ? (acc = [
              ...acc,
              {
                label: children.attributes.title,
                url: children.attributes.url,
              },
            ])
          : acc;
      },
      []
    );
    return {
      label: tab.attributes.title,
      items: childrens,
    };
  });
  return data;
};

const HeaderWrapper: React.FC<HeaderWrapperProps> = ({ variant = 'black' }) => {
  const [visibleTab, setVisibleTab] = React.useState<number>(0);
  const [tabColor, setTabColor] = React.useState<string>('');
  const handleMenu = (tab: number, color?: string) => {
    if (color) {
      setTabColor(color);
    } else {
      setTabColor('');
    }
    setVisibleTab(tab);
  };

  const formattedData = getFormattedData(mockData);

  return (
    <>
      <Header variant={variant}>
        <HeaderMainNavigation
          onMouseEnter={handleMenu}
          size="large"
          classNames="absolute md:right-[calc(50%-87.5px)] lg:right-[calc(50%-120px)] md:top-[calc(50%-12px)] lg:top-[calc(50%-16px)] md:block sm:hidden"
          linkClassNames="md:text-base lg:text-2xl"
          tabs={[
            {
              label: 'Art',
              color: 'pink-02',
              url: '/',
            },
            {
              label: "What's On",
              color: 'purple-02',
              url: '/',
            },
            {
              label: 'Visit',
              color: 'skyblue',
              url: '/',
            },
          ]}
        />
        <div className="flex items-center">
          <HeaderMainNavigation
            classNames="md:block sm:hidden"
            linkClassNames="md:text-[13px] lg:text-[19px]"
            tabs={[
              {
                label: 'Shop',
                url: '/',
              },
              {
                label: 'Become a Member',
                url: '/',
              },
              {
                label: 'Download App',
                url: '/',
              },
            ]}
          />
          <div className="sm:flex md:block items-center">
            <Button
              prefix={<User />}
              prefixClassname="pr-0 text-base mb-1"
              fontWeight="medium"
              classNames={`sm:flex md:hidden font-medium sm:text-[11px] md:text-xl ${variant} md:flex-row flex-col sm:!px-2 sm:!py-0`}
              variant={variant}
            >
              Profile
            </Button>
            <Search variant={variant} />
            <div className="md:hidden block">
              <MobileMenu variant={variant} menu={getFormattedData(mockData)} />
            </div>
          </div>
        </div>
      </Header>

      {
        <HeaderMainNavigationMenu
          variant={visibleTab === formattedData.length ? 'white' : 'black'}
          visibleTab={visibleTab}
          backgroundColor={tabColor ? `bg-${tabColor}` : 'bg-current'}
          onMouseOut={handleMenu}
          data={formattedData[visibleTab - 1]?.items || []}
        />
      }
    </>
  );
};

export default HeaderWrapper;
