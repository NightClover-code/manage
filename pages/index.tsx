import { NextPage } from 'next';
import MainLayout from '../layouts/MainLayout';

const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <div className="wrapper">Hello</div>
    </MainLayout>
  );
};

export default HomePage;
