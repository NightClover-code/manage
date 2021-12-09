//importing types & utils
import { NextPage } from 'next';
import { seoConfig } from '../utils';
//importing components
import SEO from '../components/SEO';
import MainLayout from '../layouts/MainLayout';

const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <SEO {...seoConfig} />
      <main className="wrapper"></main>
    </MainLayout>
  );
};

export default HomePage;
