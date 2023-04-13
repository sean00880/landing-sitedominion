import React, { Component } from 'react';
import Link from 'next/link';
import React, { Fragment } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { saasModernTheme } from 'common/theme/saasModern';
import ResetCSS from 'common/assets/css/style';
import { GlobalStyle, ContentWrapper } from 'containers/SaasModern/sassModern.style';

import Navbar from 'containers/SaasModern/Navbar';
class CustomError extends Component {
    render() {
        return (
            <ThemeProvider theme={saasModernTheme}>
      <Fragment>
        <Head>
          <title>Site Dominion | Best Web Design San Diego</title>
          <meta name="Description" content="React next landing page" />
          <meta name="theme-color" content="#ec5555" />
          {/* Load google fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,400i,500,500i,700,900|Open+Sans:400,400i,600,700"
            rel="stylesheet"
          />
        </Head>

        <ResetCSS />
        <GlobalStyle />

        <ContentWrapper>
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <div className="error-area">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="error-content-wrap">
                            <h2>Your message has been received.</h2>
                            <h3 style={{"textAlign":"center","color":"#ad5555"}}>Thank you for your reaching out to us.</h3>
                            <p>Our staff will get back to you shortly..</p>

                            <Link href="/">
                                <a className="default-btn btn-two">
                                    Return To Home Page
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
            
        );
    }
}

export default CustomError;