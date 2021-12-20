//importing types & utils
import { GetStaticProps, NextPage } from 'next';
import { seoConfig } from '../utils';
import { AdvantageInterface, ImageInterface } from '../interfaces';
import { advantagesData, companiesData } from '../graphql';
//importing components
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Advantages from '../components/Advantages';

interface HomePageProps {
  advantages: AdvantageInterface[];
  companies: ImageInterface[];
}

const HomePage: NextPage<HomePageProps> = ({ advantages, companies }) => {
  return (
    <>
      <SEO {...seoConfig} />
      <main className="wrapper">
        <Hero companies={companies} />
        <Advantages advantages={advantages} />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const responses = await Promise.all([advantagesData, companiesData]);

  const data = responses.map(res => res.data);

  return {
    props: {
      advantages: data[0].advantages,
      companies: data[1].assets,
    },
  };
};

export default HomePage;
