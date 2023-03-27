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
      <Container fullWidth noGutter className="info-sec-container">
        <Box {...row} {...imageAreaRow}>
          <Box {...col} {...imageArea} className="image_area">
            <Card {...imageWrapper} {...imageWrapperOne}>
              <Fade left>
                <NextImage src={ImageOne} alt="Info Image One" />
              </Fade>
            </Card>
          </Box>
        </Box>
      </Container>
      
      <Container>
        <Box {...row} {...textAreaRow}>
          <Box {...col} {...textArea} style={{"width":"100%"}}>
            <Heading
              {...title}
              content="Project Overview"
              style={{"textAlign":"center"}}
            />
            <Text
              {...description}
              content="As a web development agency, Site Dominion was thrilled to work with Grandpa Ron's LLC, a family-owned landscaping business, to build a new website that accurately reflected their values and showcased their services."/>
            
          </Box>
          
        </Box>
  
      </Container>
      <Container>
        <Box {...row} {...textAreaRow}>
          <Box {...col} {...textArea} style={{"width":"100%"}}>
            <Heading
              {...title}
              content="Technology Stack"
            />
            <Text
              {...description}
              content="To ensure that the website would be fast, reliable, and optimized for search engines, we used a combination of React, Vercel, Github Pages, Email JS (for Lead Generation), and Next.js.
              "/>
            <Text
              {...description}
              content="First, we used React, a popular JavaScript library, to build the website's frontend. React allowed us to create reusable UI components that could be easily updated and modified as needed. This approach also ensured that the website's codebase was organized, easy to maintain, and scalable."
            />
            <Text
              {...description}
              content=" Next, we utilized Vercel, a cloud-based platform for building, deploying, and hosting websites, to ensure that the website was fast and reliable. Vercel provided automatic code updates, built-in performance optimization, and easy deployment, making it the perfect choice for Grandpa Ron's LLC's website."
            />
            
          </Box>
        </Box>
  
      </Container>
      <Container>
        <Box {...row} {...textAreaRow}>
          <Box {...col} {...textArea}>
          <Text 
              {...description}
              content="We also used Github Pages, a static site hosting service, to host the website's source code. Github Pages allowed us to easily manage and update the website's codebase, ensuring that it was always up-to-date and accessible to the Grandpa Ron's LLC team.
              
              To optimize the website for search engines, we used Next.js, a React-based web framework that provides server-side rendering and dynamic content updates. Next.js allowed us to build a fast and performant website that was optimized for search engines and user experience. We also included on-page SEO techniques such as meta descriptions, image alt tags, and structured data.
              
              To further optimize lead generation, we used Email JS, a platform that allows businesses to send emails directly from their website, to capture leads from the website's contact form. This integration allowed Grandpa Ron's LLC to receive leads directly in their email inbox and follow up with potential customers in a timely manner."
             />
          <Heading
              {...title}
              content="Design Considerations"
            />
            <Text
              {...description}
              content="In terms of design, we worked closely with Grandpa Ron's LLC to create a website that accurately represented their brand and values. We utilized a clean and modern design aesthetic that was easy to navigate and highlighted the business's services and value proposition. We also included a prominent call-to-action button that encouraged users to request a quote or get in touch with the Grandpa Ron's LLC team."/>

            
            
          </Box>
        </Box>
  
      </Container>
      <Container>
        <Box {...row} {...textAreaRow} style={{"flexDirection":"row"}}>
          <Box {...col} {...textArea} style={{"width":"100%"}}>
          <Heading
              {...title}
              content="Website Functionality"
            />
          <Text 
              {...description}
              content="The website has several features that make it easy for users to learn about the business's services and contact them for work. The homepage features a prominent call to action that encourages users to request a quote. The website's services page provides detailed information about the different services offered by Grandpa Ron's LLC, along with pricing information. The website also has a gallery section where the business can showcase their previous work, which can help potential customers get an idea of the quality of their services."
            />
            
            <Text
              {...description}
              content="Making your website mobile-friendly and improving its responsiveness are crucial throughout website development. This will prevent lags when visitors and potential customers access your website from mobile devices, tablets, laptops, desktops and other devices."
            />
             <Heading
              {...title}
              content="3) Fast Page Loading Speed"
            />
            <Text
              {...description}
              content="Your visitors may become dissatisfied with a slow website, abandon it, and go to one of your rivals who have faster-loading sites to find the goods or services you're offering. By picking Site Dominion for your website development needs, you can effortlessly boost the speed of your site and make it easier for people to navigate between different pages."
            />
             <Heading
              {...title}
              content="4) ADA Compliant"
            />
            <Text
              {...description}
              content="The Americans With Disabilities Act (ADA) aims to achieve equity in the IT industry, and web accessibility should be the new standard. No matter their physical or mental capabilities, anyone can visit websites more easily thanks to ADA web compliance. Regardless of how familiar you are with the current digital content rules or how little you have heard of them, we will carefully collect your needs in order to develop a practical accessibility roadmap."
            />
             <Heading
              {...title}
              content="Conclusion"
            />
            <Text
              {...description}
              content="Your website serves as the gateway to your organization. Since it is one of the first things visitors will observe about your brand, it must be attractive, simple to use, and packed with pertinent information. We can collaborate with you to create a website for your company that accurately reflects your brand and has a concise and appealing design."
            />

            
          </Box>
        </Box>
  
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
    textIndent:"10px",
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
