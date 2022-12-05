import Footer from '@/components/Footer/FooterWrapper';
import Header from '@/components/Header/HeaderWrapper';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const CSS = `
    .TNEW-content {
      margin-bottom: 10rem;
    }
    
    h1 {
      line-height: 1.1;
      margin-bottom: 1rem;
    }
    
    .tn-heading-sub-text {
      font-size: 1.5rem;
      line-height: 2;
    }
    
    .tn-header-component {
      margin-bottom: 5rem;
    }
    
    input[type='text'],
    input[type='email'],
    input[type='password'] {
      border-radius: 0;
      border: 2px solid #111111;
      height: 56px;
    }
    
    input[type='text']::placeholder,
    input[type='email']::placeholder,
    input[type='password']::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #111111;
      opacity: 1; /* Firefox */
    }
    
    input[type='text']::-ms-input-placeholder,
    input[type='email']::-ms-input-placeholder,
    input[type='password']::-ms-input-placeholder {
      /* Microsoft Edge */
      color: #111111;
    }
    
    .tn-login-component .control-label {
      display: flex;
      justify-content: flex-end;
    }
    
    .tn-login-component .control-label > span:first-child {
      clip: rect(1px, 1px, 1px, 1px);
      clip-path: inset(50%);
      height: 1px;
      width: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="TNEW-outer bg-white">
        <div className="container bg-white text-black mx-auto sm:px-4 md:px-12 lg:px-0">
          <Header variant="white" />
          <div className="TNEW-wrapper">
            <div
              className="TNEW-content container"
              dangerouslySetInnerHTML={{ __html: '<!--TNEW content here-->' }}
            />
          </div>
        </div>
        <div className="bg-black">
          <div className="container mx-auto">
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
