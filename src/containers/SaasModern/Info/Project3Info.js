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
              content="Site Dominion has been commissioned to develop a website for Metanetic, a social media marketing agency that provides web development, graphic design, and digital marketing as their primary services. The website will be developed using Next JS, a popular React framework that provides an efficient and scalable solution for building complex web applications. The website will serve as a central platform for Metanetic to showcase their services, portfolio, and expertise to potential clients and partners."/>
            
          </Box>
          
        </Box>
  
      </Container>
      <Container>
        <Box {...row} {...textAreaRow}>
          <Box {...col} {...textArea}>
            <Heading
              {...title}
              content="Project Goals"
            />
            <Text
              {...description}
              content="The primary goal of the project is to create a visually appealing and user-friendly website that effectively communicates Metanetic's services, brand identity, and values. The website should also be responsive and optimized for search engines, ensuring that potential clients can easily find and access Metanetic's services. Additionally, the website should be built with scalability in mind, allowing for future expansion and updates as the company grows.
              "/>

            
          </Box>
        </Box>
  
      </Container>
      <Container>
        <Box {...row} {...textAreaRow}>
          <Box {...col} {...textArea}>
          <Heading
              {...title}
              content="Key Features"
            />
            <Text
              {...description}
              content="Homepage: The homepage will provide an overview of Metanetic's services, portfolio, and team members. It will also include a call-to-action section, encouraging visitors to contact Metanetic for more information or to schedule a consultation."/>

              <Text
              {...description}
              content="Services: A dedicated services page will provide detailed information about Metanetic's web development, graphic design, and digital marketing services. Each service will be described in detail, with examples of past projects and client testimonials."/>
              
              <Text
              {...description}
              content="Portfolio: The portfolio page will showcase Metanetic's past projects, providing visitors with a visual representation of the company's capabilities and expertise. Each project will include a brief description, images, and links to the live websites or marketing campaigns.
              "/>
                
          </Box>
        </Box>
  
      </Container>
      <Container>
        <Box {...row} {...textAreaRow} style={{"flexDirection":"row"}}>
          <Box {...col} {...textArea} style={{"width":"100%"}}>
          <Text
              {...description}
              content="About Us: The About Us page will provide information about Metanetic's history, mission, and team members. This page will also include a section highlighting the company's core values, such as creativity, innovation, and customer satisfaction.
              "/>
              <Text
              {...description}
              content="Contact Us: A dedicated contact page will provide visitors with multiple ways to contact Metanetic, including a contact form, phone number, email address, and social media links.
              "/>   
             <Heading
              {...title}
              content="Conclusion"
            />
            <Text
              {...description}
              content="The development of the Metanetic website is an exciting opportunity for Site Dominion to showcase our expertise in web development and design. We look forward to working closely with the Metanetic team to create a website that accurately represents their brand and helps them achieve their business goals.
            "/>

            
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
