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
import ImageOne from 'common/assets/image/saasModern/afj.png';
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
            <h3>Website Link: <a href="https://afj-productions.vercel.app/">https://afj-productions.vercel.app/</a></h3>
            <Text
              {...description}
              content="Welcome to the website overview for A Film Junkie Productions, a video production studio. Here at Site Dominion, we are thrilled to have been able to work with A Film Junkie Productions to develop their new business website using React, Vercel, Github Pages, and Next.JS."/>
            
          </Box>
          
        </Box>
  
      </Container>
      <Container>
        <Box {...row} {...textAreaRow}>
          <Box {...col} {...textArea}>
            <Text
              {...description}
              content="Our team of web developers worked closely with A Film Junkie Productions to ensure that their website was not only visually appealing, but also functional and user-friendly. We chose to use React, a popular JavaScript library for building user interfaces, to ensure that the website was responsive and easy to navigate.
              "/>

            <Heading
              {...title}
              content="Technology Stack"
            />
            
          </Box>
        </Box>
  
      </Container>
      <Container>
        <Box {...row} {...textAreaRow}>
          <Box {...col} {...textArea}>
            <Text
              {...description}
              content="To ensure that the website was fast and reliable, we utilized Vercel, a cloud platform for serverless deployment, and Github Pages, a static site hosting service. These technologies allowed us to deploy the website quickly and easily, while also ensuring that it was scalable and could handle large amounts of traffic."/>
                
          </Box>
        </Box>
  
      </Container>
      <Container>
        <Box {...row} {...textAreaRow} style={{"flexDirection":"row"}}>
          <Box {...col} {...textArea} style={{"width":"100%"}}>
          <Heading
              {...title}
              content="Key Features"
            />
          <Text
              {...description}
              content="One of the key features of the website is its use of Next.JS, a popular React framework that allows for server-side rendering and automatic code splitting. This allowed us to build a dynamic website that is optimized for performance and SEO, while also making it easy to manage and update content."/>
            
            <Heading
              {...title}
              content="Lead Generation API"
            />
          <Text
              {...description}
              content="Finally, to help A Film Junkie Productions generate leads and grow their business, we integrated Email JS, a powerful email automation platform. This allows visitors to the website to easily submit inquiries and contact the studio, while also enabling A Film Junkie Productions to manage and track leads more effectively."/>
            
            <Heading
              {...title}
              content="Conclusion"
            />
          <Text
              {...description}
              content="In summary, Site Dominion is proud to have been able to work with A Film Junkie Productions to develop their new business website using the latest technologies, including React, Vercel, Github Pages, Next.JS, and Email JS. We are confident that the new website will help A Film Junkie Productions to grow their business and achieve their goals."/>
            
            
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
