import Footer from '@/components/Footer/FooterWrapper';
import Header from '@/components/Header/HeaderWrapper';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className="container bg-black mx-auto sm:px-4 md:px-12 lg:px-0">
      <Header />
      <div className="TNEW-wrapper">
        <div
          className="TNEW-content container"
          dangerouslySetInnerHTML={{ __html: '<!--TNEW content here-->' }}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
