import React, { Fragment } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { saasModernTheme } from 'common/theme/saasModern';
import ResetCSS from 'common/assets/css/style';
import { GlobalStyle, ContentWrapper } from 'containers/SaasModern/sassModern.style';
import dynamic from 'next/dynamic';
import BannerSection from 'containers/SaasModern/Banner';

import Navbar from 'containers/SaasModern/Navbar';
const WorkingProcessSection = dynamic(() => import('containers/SaasModern/WorkingProcess'));
const WorkProcess = dynamic(() => import('containers/SaasModern/WorkingProcess/WorkProcess'));
const PricingSection = dynamic(() => import('containers/SassMinimal/Pricing'));
const PartnerSection = dynamic(() => import('containers/SaasModern/Partner'));
import BlogSection from 'containers/Agency/BlogSection';
const FaqSection = dynamic(() => import('containers/SaasModern/Faq'));
const TrialSection = dynamic(() => import('containers/SaasModern/Trial'));
const InfoSection = dynamic(() => import('containers/SaasModern/Info'));
const FeatureSection = dynamic(() => import('containers/SaasModern/Feature'));
const UpdateScreen = dynamic(() => import('containers/SaasModern/UpdateScreen'));
const TestimonialSection = dynamic(() => import('containers/SaasModern/Testimonial'));
const Footer = dynamic(() => import('containers/SaasModern/Footer'));
const Service = dynamic(() => import('containers/AgencyDigital/Service'));
const Gallery = dynamic(() => import('containers/Interior/Gallery'));
const ContactSection = dynamic(() => import('containers/SaasModern/Contact'));

const SaasModern = () => {
  return (
    <ThemeProvider theme={saasModernTheme}>
      <Fragment>
        <Head>
          <title>Website Design Service | Professional Custom Web Design</title>
          <meta name="Description" content="Top Professionally Designed Custom Websites" />
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
          <BannerSection />
          <InfoSection />
          
          
          <FeatureSection />
          <WorkingProcessSection />
          <UpdateScreen />
          <PricingSection />
          <ContactSection/>
          <BlogSection/>
          <TestimonialSection />
          <FaqSection />
    
          <Footer />
        </ContentWrapper>
      </Fragment>
    </ThemeProvider>
  );
};
export default SaasModern;
