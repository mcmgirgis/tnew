import * as NextImage from 'next/image';
import '../styles/globals.css';

const BREAKPOINTS_INT = {
  sm: 390,
  md: 820,
  lg: 1366,
  xl: 1920,
};

const customViewports = Object.fromEntries(
  Object.entries(BREAKPOINTS_INT).map(([key, val], idx) => {
    return [
      key,
      {
        name: key,
        styles: {
          width: `${val}px`,
          height: `${(idx + 5) * 10}vh`,
        },
      },
    ];
  })
);

// Allow Storybook to handle Next's <Image> component
const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) =>
    typeof props.src === 'string' ? (
      <OriginalNextImage {...props} unoptimized blurDataURL={props.src} />
    ) : (
      <OriginalNextImage {...props} unoptimized />
    ),
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
  previewTabs: {
    'storybook/docs/panel': { index: -1 },
  },
  viewport: { viewports: customViewports },
  backgrounds: {
    default: 'white',
    values: [
      {
        name: 'white',
        value: '#FFFFFF',
      },
      {
        name: 'black',
        value: '#000000',
      },
    ],
  },
};
