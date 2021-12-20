//importing types & utils
import { GetStaticProps, NextPage } from 'next';
import { seoConfig } from '../utils';
import { AdvantageInterface } from '../interfaces';
//importing graphql utils
import { client } from '../lib';
import { advantagesQuery } from '../graphql';
//importing components
import SEO from '../components/SEO';
import MainLayout from '../layouts/MainLayout';
import Hero from '../components/Hero';
import Advantages from '../components/Advantages';

interface HomePageProps {
  advantages: AdvantageInterface[];
}

const HomePage: NextPage<HomePageProps> = ({ advantages }) => {
  return (
    <MainLayout>
      <SEO {...seoConfig} />
      <main className="wrapper">
        <Hero />
        <Advantages advantages={advantages} />
      </main>
    </MainLayout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const {
    data: { advantages },
  } = await client.query({
    query: advantagesQuery,
  });

  return {
    props: {
      advantages,
    },
  };
};

export default HomePage;
