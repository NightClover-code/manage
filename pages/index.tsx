//importing types & utils
import { GetStaticProps, NextPage } from 'next';
import { seoConfig } from '../utils';
import { AdvantageInterface, ImageInterface } from '../interfaces';
//importing graphql utils
import { client } from '../lib';
import { advantagesQuery, companiesQuery } from '../graphql';
//importing components
import SEO from '../components/SEO';
import MainLayout from '../layouts/MainLayout';
import Hero from '../components/Hero';
import Advantages from '../components/Advantages';

interface HomePageProps {
  advantages: AdvantageInterface[];
  companies: ImageInterface[];
}

const HomePage: NextPage<HomePageProps> = ({ advantages, companies }) => {
  console.log(companies);

  return (
    <MainLayout>
      <SEO {...seoConfig} />
      <main className="wrapper">
        <Hero companies={companies} />
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

  const {
    data: { assets },
  } = await client.query({
    query: companiesQuery,
  });

  return {
    props: {
      advantages,
      companies: assets,
    },
  };
};

export default HomePage;
