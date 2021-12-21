//importing types & utils
import { GetStaticProps, NextPage } from 'next';
import { seoConfig } from '../utils';
import {
  AchievementInterface,
  AdvantageInterface,
  ImageInterface,
  ServiceInterface,
} from '../interfaces';
import {
  achievementsData,
  advantagesData,
  companiesData,
  servicesData,
} from '../graphql';
//importing components
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Advantages from '../components/Advantages';
import Achievements from '../components/Achievements';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';

interface HomePageProps {
  advantages: AdvantageInterface[];
  companies: ImageInterface[];
  achievements: AchievementInterface[];
  services: ServiceInterface[];
}

const HomePage: NextPage<HomePageProps> = ({
  advantages,
  companies,
  achievements,
  services,
}) => {
  return (
    <>
      <SEO {...seoConfig} />
      <main className="wrapper">
        <Hero companies={companies} />
        <Advantages advantages={advantages} />
        <Achievements achievements={achievements} />
        <Services services={services} />
        <Testimonials />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const responses = await Promise.all([
    advantagesData,
    companiesData,
    achievementsData,
    servicesData,
  ]);

  const data = responses.map(res => res.data);

  return {
    props: {
      advantages: data[0].advantages,
      companies: data[1].assets,
      achievements: data[2].achievements,
      services: data[3].services,
    },
  };
};

export default HomePage;
