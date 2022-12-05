import type { AppProps } from 'next/app';
import { SSRProvider } from 'react-aria';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}

export default MyApp;
