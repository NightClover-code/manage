//importing types & utils
import { GetStaticProps, NextPage } from 'next';
import { seoConfig } from '../utils';
import {
  AchievementInterface,
  AdvantageInterface,
  ImageInterface,
} from '../interfaces';
import { achievementsData, advantagesData, companiesData } from '../graphql';
//importing components
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Advantages from '../components/Advantages';
import Achievements from '../components/Achievements';
import Services from '../components/Services';

interface HomePageProps {
  advantages: AdvantageInterface[];
  companies: ImageInterface[];
  achievements: AchievementInterface[];
}

const HomePage: NextPage<HomePageProps> = ({
  advantages,
  companies,
  achievements,
}) => {
  return (
    <>
      <SEO {...seoConfig} />
      <main className="wrapper">
        <Hero companies={companies} />
        <Advantages advantages={advantages} />
        <Achievements achievements={achievements} />
        <Services />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const responses = await Promise.all([
    advantagesData,
    companiesData,
    achievementsData,
  ]);

  const data = responses.map(res => res.data);

  return {
    props: {
      advantages: data[0].advantages,
      companies: data[1].assets,
      achievements: data[2].achievements,
    },
  };
};

export default HomePage;
