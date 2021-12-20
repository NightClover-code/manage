import '../styles/css/default.css';
import type { AppProps } from 'next/app';
import { AdvantagesProvider } from '../context';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AdvantagesProvider>
      <Component {...pageProps} />
    </AdvantagesProvider>
  );
}

export default MyApp;
