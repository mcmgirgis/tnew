import ArtWorkCard from '@/components/ArtWorkCard/ArtWorkCard';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ArtWorkGallery from './ArtWorkGallery';

const artCardData = [
  {
    title: 'Title',
    width: 500,
    height: 800,
    description: 'Description',
    image:
      'https://piction.clevelandart.org/cma/ump.di?e=875F311B8ABDADB7679048327F68807487ADCD9482F3B55F141F97DF54516092&s=24247294&se=1068682658&v=0&f=1976.2_o5.jpg',
    cta: 'View ArtWork',
    url: '/',
    publicDomain: '1965.233',
    vertical: true,
  },
  {
    title: 'On the Test, 1859',
    width: 500,
    height: 800,
    description: 'Francis Seymour Haden (British, 1818–1910)',
    image:
      'https://piction.clevelandart.org/cma/ump.di?e=9DFE9E95ED26AC3217F45D1640CF47948D567CB550480BD201D6F87FC9090616&s=24247294&se=1347409688&v=4&f=1922.145_o5.jpg',
    cta: 'View ArtWork',
    url: '/',
    publicDomain: '1922.145',
    vertical: true,
  },
  {
    title: 'The Sacrifice of Isaac, c. 1527',
    width: 500,
    height: 800,
    description: 'Andrea del Sarto (Italian, 1486–1530)',
    image:
      'https://piction.clevelandart.org/cma/ump.di?e=AF4DFCFDE9FEC3C88E95D0F244A394057F28BDDEFB2F92EEEEE3A250A96FFC9F&s=24247294&se=297569783&v=4&f=1937.577_o5.jpg',
    cta: 'View ArtWork',
    url: '/',
    publicDomain: '1922.145',
    vertical: true,
  },
  {
    title: 'House and Garden, 1917',
    width: 500,
    height: 800,
    description: 'Gustave Baumann (American, born Germany, 1881–1971)',
    image:
      'https://piction.clevelandart.org/cma/ump.di?e=CBE3B380480129C18A3DF0CF36B77A0EB46E2066CA94532720E5260FF78C448C&s=24247294&se=1215636534&v=5&f=2005.467_o5.jpg',
    cta: 'View ArtWork',
    url: '/',
    publicDomain: '1922.145',
    vertical: true,
  },
  {
    title: 'Covered Box, c. 1898–1902',
    width: 500,
    height: 800,
    description:
      'Tiffany Glass & Decorating Company (American, New York, 1892–1902)',
    image:
      'https://piction.clevelandart.org/cma/ump.di?e=1E0FB20BDA9F78F02009587D5751D2432FED5B1FAA701B297F8AA5E40C89C496&s=24247294&se=918126186&v=1&f=%5Cd9142%5Cu214791424%5C2018.290_o5.jpg',
    cta: 'View ArtWork',
    url: '/',
    publicDomain: '1922.145',
    vertical: true,
  },
  {
    title: 'Nome Gods Bearing Offerings, c. 1391–1353 BC',
    width: 500,
    height: 800,
    description:
      'Egypt, New Kingdom, Dynasty 18 (1540-1296), reign of Amenhotep III',
    image:
      'https://piction.clevelandart.org/cma/ump.di?e=58FC0BF34E2693C355480CE5F1E76BDD6A9C75CA322F3BBDE703646CF2800A02&s=24247294&se=1874935360&v=4&f=1961.205_o5.jpg',
    cta: 'View ArtWork',
    url: '/',
    publicDomain: '1922.145',
    vertical: true,
  },
  {
    title: 'Paint Box of Vizier Amenemope, c. 1427–1401 BC',
    width: 500,
    height: 800,
    description:
      'Egypt, New Kingdom, Dynasty 18 (1540-1296 BC), reign of Amenhotep II',
    image:
      'https://piction.clevelandart.org/cma/ump.di?e=C67443599AF8C1869FE219A9F7C394D7154DDE5F7A1D52DD8D1AAD1990DC2C38&s=24247294&se=1779570359&v=3&f=1914.680_o5.jpg',
    cta: 'View ArtWork',
    url: '/',
    publicDomain: '1922.145',
    vertical: true,
  },
  {
    title: 'Icon of the New Testament Trinity, c. 1450',
    width: 500,
    height: 800,
    image:
      'https://piction.clevelandart.org/cma/ump.di?e=BA2D58933E1413A2622D2793CDA06C2846B51B6D839C6C85A8295BB175F6F601&s=24247294&se=2040367084&v=0&f=2016.32_o5.jpg',
    description: 'Byzantium, Constantinople',
    cta: 'View ArtWork',
    url: '/',
    publicDomain: '1922.145',
    vertical: true,
  },
  {
    title: 'New Shoes for H, 1973–74',
    width: 500,
    height: 800,
    description: 'Don Eddy (American, 1944-)',
    image:
      'https://piction.clevelandart.org/cma/ump.di?e=764E195670BFD8543D3D630E145BBF92C223C29B4ED27A9FCE113D9DF0EE6CE4&s=24247294&se=672506398&v=4&f=1974.53_o5.jpg',
    cta: 'View ArtWork',
    url: '/',
    publicDomain: '1922.145',
    vertical: true,
  },
];

export default {
  title: 'Components/ArtWorkGallery',
  component: ArtWorkGallery,
  argTypes: {
    heading: {
      control: 'text',
    },
  },
} as ComponentMeta<typeof ArtWorkGallery>;

const Template: ComponentStory<typeof ArtWorkGallery> = (args) => (
  <ArtWorkGallery {...args} />
);

export const Default = Template.bind({});
Default.args = {
  heading: 'Highlights from Collection',
  url: '/',
  list: [
    <ArtWorkCard key={1} {...artCardData[0]} />,
    <ArtWorkCard key={2} {...artCardData[1]} />,
    <ArtWorkCard key={3} {...artCardData[2]} />,
    <ArtWorkCard key={4} {...artCardData[3]} />,
    <ArtWorkCard key={5} {...artCardData[4]} />,
    <ArtWorkCard key={6} {...artCardData[5]} />,
    <ArtWorkCard key={7} {...artCardData[6]} />,
    <ArtWorkCard key={8} {...artCardData[7]} />,
    <ArtWorkCard key={9} {...artCardData[8]} />,
  ],
};
