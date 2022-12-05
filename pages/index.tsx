import Footer from '@/components/Footer/FooterWrapper';
import Header from '@/components/Header/HeaderWrapper';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="w-full bg-black">
      <div className="container mx-auto sm:px-4 md:px-12 lg:px-0">
        <Header />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
