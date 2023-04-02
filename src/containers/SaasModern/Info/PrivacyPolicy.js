import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Fade from 'react-reveal/Fade';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import Card from 'common/components/Card';
import NextImage from 'common/components/NextImage';
import Container from 'common/components/UI/Container';

import InfoSectionWrapper from './info.style';
import ImageOne from 'common/assets/image/saasModern/dash-1.png';
import ImageTwo from 'common/assets/image/saasModern/dash-2.png';

const InfoSection = ({
  row,
  col,
  title,
  description,
  button,
  textArea,
  imageArea,
  imageAreaRow,
  imageWrapper,
  imageWrapperOne,
  imageWrapperTwo,
  textAreaRow,
}) => {
  return (
    <InfoSectionWrapper>
      
      <Container>
      <h3>Privacy Policy</h3>
             
             <p>Site Dominion is a web development agency that specializes in providing businesses with custom website design and development solutions. We understand the importance of protecting the privacy and security of our clients and their users’ personal information. We are committed to complying with applicable data protection laws and ensuring the confidentiality, integrity, and availability of the personal information that we collect, use, disclose, and store.</p>
             <p>This Privacy Policy explains how we collect, use, disclose, and store personal information when you use our website or engage our services. By accessing or using our website or engaging our services, you acknowledge that you have read, understood, and accepted the terms of this Privacy Policy.</p>
             <h3>Collection of Personal Information</h3>
             <p>We may collect personal information about you when you access or use our website or engage our services. The personal information that we collect may include:</p>
             <ul>
                 <li>Your name, email address, phone number, and postal address</li>
                 <li>Information about your business, including its name, website URL, and industry</li>
                 <li>Payment information, such as credit card details</li>
                 <li>Information about your preferences and interests</li>
                 <li>Information about your use of our website or services</li>
             </ul>
             <p>We may collect personal information about you directly from you, from our affiliates or subsidiaries, or from third-party sources. We may also collect personal information about you automatically when you use our website, such as through cookies or similar technologies.</p>
             <h3>Use of Personal Information</h3>
             <ul>
                 <li>To provide and improve our services to you</li>
                 <li>To communicate with you about our services, promotions, and events</li>
                 <li>To process your payment for our services</li>
                 <li>To comply with our legal and regulatory obligations</li>
                 <li>To detect and prevent fraud, unauthorized access, and other illegal activities</li>
                 <li>To analyze and improve the performance and effectiveness of our website and services</li>
                 <li>To personalize your experience on our website and recommend products or services that may interest you</li>
                 <li>To maintain and improve the security of our website and services</li>
             </ul>
             <h3>Disclosure of Personal Information</h3>
             <ul>
                 <li>With your consent</li>
                 <li>To our affiliates and subsidiaries</li>
                 <li>To our service providers, such as website hosting providers, payment processors, and marketing and advertising partners, who need to access your personal information to perform their services for us</li>
                 <li>To our business partners, such as companies that provide complementary products or services, with your consent</li>
                 <li>To comply with our legal and regulatory obligations, such as responding to a subpoena, court order, or other legal process</li>
                 <li>To protect our rights, property, or safety, or the rights, property, or safety of our clients, employees, or others</li>
                 <li>In connection with a business merger, acquisition, or sale of assets, in which case your personal information may be transferred to the acquiring company</li>
             </ul>
             <p>We require our service providers and business partners to protect the confidentiality and security of your personal information and to use it only for the purposes for which it was disclosed.</p>
             <h3>Deta Retention</h3>
             <p>We will retain your personal information for as long as necessary to fulfill the purposes for which it was collected, to comply with our legal and regulatory obligations, and to protect our rights and interests. We will securely dispose of or de-identify your personal information when it is no longer necessary for these purposes.</p>
             <h3>Cookies and Similar Technologies</h3>
             <p>We use cookies and similar technologies on our website to collect certain information about your use of our website, such as your IP address, browser type, device information, and browsing behavior. Cookies are small text files that are stored on your device when you access or use our website. We use cookies to personalize your experience on our website, to remember your preferences, and to analyze and improve the performance and effectiveness of our website.</p>
             <p>We may use both session cookies and persistent cookies. Session cookies are temporary cookies that are erased when you close your browser.</p>
           
            <h3>Changes to Privacy Policy</h3>
            <p>We may update our privacy policy from time to time to reflect changes in our practices or services. We will notify you of any significant changes to this policy.</p>
             <h3>Contact Us</h3>
             <p>If you have any questions or concerns about our privacy policy or how we handle your personal information, please contact us at https://www.sitedominion.com/getting-started/#quote.</p>
  
      </Container>
      
      
    </InfoSectionWrapper>
  );
};

InfoSection.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  button: PropTypes.object,
  textArea: PropTypes.object,
  imageArea: PropTypes.object,
  imageAreaRow: PropTypes.object,
  imageWrapper: PropTypes.object,
  imageWrapperOne: PropTypes.object,
  imageWrapperTwo: PropTypes.object,
  textAreaRow: PropTypes.object,
};

InfoSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
   
    mr: '-15px',
  },
  textAreaRow: {
    flexDirection: 'row-reverse',
  },
  col: {
    pr: '15px',
    pl: '15px',
  },
  textArea: {
    width: ['100%', '100%', '50%', '53%', '55%'],
  },
  imageArea: {
    width: ['50%', '70%', '23%', '25%', '20%'],
    flexBox: true,
  },
  imageWrapper: {
    boxShadow: 'none',
  },
  imageWrapperOne: {
    mr: ['-250px', '-250px', '-200px', '-250px', '-400px'],
  },
  imageWrapperTwo: {
    alignSelf: 'flex-end',
    mb: '-60px',
  },
  title: {
    fontSize: ['26px', '32px', '36px', '40px', '48px'],
    fontWeight: '400',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '20px',
    lineHeight: '1.25',
  },
  description: {
    fontSize: ['15px', '15px', '15px', '16px', '16px'],
    color: '#343d48cc',
    lineHeight: '2',
    mb: '33px',
  },
  button: {
    type: 'button',
    fontSize: '21px',
    fontWeight: '600',
    borderRadius: '4px',
    pl: '22px',
    pr: '22px',
    colors: 'secondaryWithBg',
  },
};

export default InfoSection;
