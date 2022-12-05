import Footer from '@/components/Footer/FooterWrapper';
import Header from '@/components/Header/HeaderWrapper';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const CSS = `
    html {
      font-size: 16px;
    }

    a:focus, a:hover {
      color: #111111;
      text-decoration: none;
    }
    
    .TNEW-content {
      margin-bottom: 10rem;
    }
    
    h1 {
      font-size: 4rem;
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

    // Adjust the max width of each of the two columns.
    .tn-account-login-page > .row > .col-sm-6:first-child {
      padding-right: 8rem;
    }
    .tn-account-login-page > .row > .col-sm-6:last-child {
      padding-left: 8rem;
    }
    
    input[type='text'],
    input[type='email'],
    input[type='password'] {
      border-radius: 0;
      border: 2px solid #111111;
      height: 3.5rem;
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

    .form-group {
      margin-bottom: 1.5rem;
    }

    .tn-required-field {
      color: #111111;
      font-style: normal;
      font-size: 0.9375rem;
    }

    .tn-login-component h2,
    .tn-create-heading {
      border-bottom: 2px solid #111111;
      color: #111111;
      font-size: 2.125rem;
      padding-bottom: 1rem;
      margin-bottom: 3rem;
    }
    
    .tn-login-component .control-label {
      display: flex;
      justify-content: space-between;
    }
    
    .tn-login-component .control-label > span:first-child {
      font-weight: 400;
      font-size: 1.1875rem;
    }

    .tn-register-button,
    .tn-account-login-forgot-login-link {
      height: 3.5rem;
      border-radius: 0;
      border: 2px solid #111;
      width: 100%;
      background: #ffffff;
      color: #111;
      font-weight: 700;
      font-size: 1.125rem;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .tn-account-login-forgot-login-link {
      border: 0;
    }

    #tn-login-button {
      height: 3.5rem;
      border-radius: 0;
      border: 0;
      width: 100%;
      background: #111111;
      color: #ffffff;
      font-weight: 700;
      font-size: 1.125rem;
      display: flex;
      align-items: center;
      justify-content: center;
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
