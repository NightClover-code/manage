//importing types & utils
import { GetStaticProps, NextPage } from 'next';
import { seoConfig } from '../utils';
import {
  AchievementInterface,
  AdvantageInterface,
  ImageInterface,
  ServiceInterface,
  TestimonialInterface,
} from '../interfaces';
import {
  achievementsData,
  advantagesData,
  companiesData,
  servicesData,
  testimonialsData,
} from '../graphql';
//importing components
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Advantages from '../components/Advantages';
import Achievements from '../components/Achievements';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

interface HomePageProps {
  advantages: AdvantageInterface[];
  companies: ImageInterface[];
  achievements: AchievementInterface[];
  services: ServiceInterface[];
  testimonials: TestimonialInterface[];
}

const HomePage: NextPage<HomePageProps> = ({
  advantages,
  companies,
  achievements,
  services,
  testimonials,
}) => {
  return (
    <>
      <SEO {...seoConfig} />
      <main className="wrapper">
        <Hero companies={companies} />
        <Advantages advantages={advantages} />
        <Achievements achievements={achievements} />
        <Services services={services} />
        <Testimonials testimonials={testimonials} />
        <CTA />
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
    testimonialsData,
  ]);

  const data = responses.map(res => res.data);

  return {
    props: {
      advantages: data[0].advantages,
      companies: data[1].assets,
      achievements: data[2].achievements,
      services: data[3].services,
      testimonials: data[4].testimonials,
    },
  };
};

export default HomePage;
