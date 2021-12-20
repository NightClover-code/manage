//importing types & utils
import { NextPage } from 'next';
import { seoConfig } from '../utils';
//importing components
import SEO from '../components/SEO';
import MainLayout from '../layouts/MainLayout';
import Hero from '../components/Hero';
import Advantages from '../components/Advantages';

const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <SEO {...seoConfig} />
      <main className="wrapper">
        <Hero />
        <Advantages />
      </main>
    </MainLayout>
  );
};

export default HomePage;
