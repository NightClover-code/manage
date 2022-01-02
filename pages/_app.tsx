//importing styles
import '../styles/css/default.css';
import 'aos/dist/aos.css';
//importing hooks & utils
import { useEffect } from 'react';
import AOS from 'aos';
import type { AppProps } from 'next/app';
import MainLayout from '../layouts/MainLayout';
import { NavProvider } from '../context';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 750,
      once: true,
    });
  }, []);

  return (
    <NavProvider>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </NavProvider>
  );
}

export default MyApp;
