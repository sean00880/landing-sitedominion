import React, { Component } from 'react';
import Link from 'next/link';
import { Fragment } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { saasModernTheme } from 'common/theme/saasModern';
import ResetCSS from 'common/assets/css/style';
import { GlobalStyle, ContentWrapper } from 'containers/SaasModern/sassModern.style';
import dynamic from 'next/dynamic';
import LogoImage from 'common/assets/image/saasModern/logo-white.png';
import Image from 'next/image';
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
             
            </DrawerProvider>
          </Sticky>
          <div className="error-area">
                <div className="d-table">
                
                    <div className="d-table-cell">
                        <div className="error-content-wrap" style={{'height':'100vh','alignItems':'center','textAlign':'center','display':'flex','flexDirection':'column','justifyContent':'center'}}>
                        <Image
            src={LogoImage} width={250} height={250}
          />
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

         
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
            
        );
    }
}

export default CustomError;