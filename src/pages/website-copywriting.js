import React, { Fragment } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import Sticky from 'react-stickynode';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import { saasModernTheme } from 'common/theme/saasModern';
import ResetCSS from 'common/assets/css/style';
import { GlobalStyle, ContentWrapper } from 'containers/SaasModern/sassModern.style';
import dynamic from 'next/dynamic';
import BannerSection from 'containers/SaasModern/Banner/Banner5';
import Navbar from 'containers/SaasModern/Navbar';
import WorkingProcessSection from 'containers/SaasModern/WorkingProcess';
import PricingSection from 'containers/SassMinimal/Pricing';
import PartnerSection from 'containers/SaasModern/Partner';
import FaqSection from 'containers/SaasModern/Faq';
import TrialSection from 'containers/SaasModern/Trial';
import BlogSection from 'containers/Agency/BlogSection';
import InfoSection from 'containers/SaasModern/Info/CopywritingInfo';
import FeatureSection from 'containers/SaasModern/Feature';
import UpdateScreen from 'containers/SaasModern/UpdateScreen';
import TestimonialSection from 'containers/SaasModern/Testimonial';
import Footer from 'containers/SaasModern/Footer';
import Service from 'containers/AgencyDigital/Service';
import TrustedProofSections from 'containers/Crypto/TrustedProof';
const Gallery = dynamic(() => import('containers/Interior/Gallery'));
const ContactSection = dynamic(() => import('containers/SaasModern/Contact'));

const SaasModern = () => {
  return (
    <ThemeProvider theme={saasModernTheme}>
      <Fragment>
        <Head>
          <title>Site Dominion | Website Copywriting</title>
          <meta name="Description" content="Premium Business Websites" />
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
