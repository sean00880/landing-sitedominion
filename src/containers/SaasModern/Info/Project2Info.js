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
import ImageOne from 'common/assets/image/saasModern/designationdumpllc.png';
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
            <h3>Website Link: <a href="https://designationdumpllc.com/">https://www.designationdumpllc.com/</a></h3>
            <Text
              {...description}
              content="Site Dominion was approached by Designation Dump LLC, a junk removal business, to create a new website for their business."/>
            
          </Box>
          
        </Box>
  
      </Container>
      <Container>
        <Box {...row} {...textAreaRow}>
          <Box {...col} {...textArea}>
            <Heading
              {...title}
              content="Technology Stack"
            />
            <Text
              {...description}
              content="To build the website, we decided to use a combination of React, Vercel, Github Pages, and Next.js, which allowed us to create a dynamic and high-performing website that accurately represented Designation Dump LLC's brand and values.
              "/>
            <Text
              {...description}
              content="Next, we utilized Vercel, a cloud-based platform for building, deploying, and hosting websites, to ensure that the website was fast and reliable. Vercel provided automatic code updates, built-in performance optimization, and easy deployment, making it the perfect choice for Designation Dump LLC's website."
            />
            <Text
              {...description}
              content="We also used Github Pages, a static site hosting service, to host the website's source code. Github Pages allowed us to easily manage and update the website's codebase, ensuring that it was always up-to-date and accessible to the Designation Dump LLC team."
            />


            
          </Box>
        </Box>
  
      </Container>
      <Container>
        <Box {...row} {...textAreaRow}>
          <Box {...col} {...textArea}>
          <Text 
              {...description}
              content="We also used Github Pages, a static site hosting service, to host the website's source code. Github Pages allowed us to easily manage and update the website's codebase, ensuring that it was always up-to-date and accessible to the Designation Dump LLC team."
             />
          <Heading
              {...title}
              content="Design Considerations"
            />
            <Text
              {...description}
              content="In terms of design, we worked closely with Designation Dump LLC to create a website that accurately represented their brand and values. We utilized a clean and modern design aesthetic that was easy to navigate and highlighted the business's services and value proposition. We also included a prominent call-to-action button that encouraged users to request a quote or get in touch with the Designation Dump LLC team."/>

            
            
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
              content="The website has several features that make it easy for users to learn about the business's services and contact them for work. The homepage features a prominent call to action that encourages users to request a quote. The website's services page provides detailed information about the different services offered by Designation Dump LLC, along with pricing information. The website also has a blog section where the business can share news and insights with its customers."
            />
             <Heading
              {...title}
              content="Conclusion"
            />
            <Text
              {...description}
              content="Overall, our team at Site Dominion is proud of the website we built for Designation Dump LLC. By using a combination of React, Vercel, Github Pages, and Next.js, we were able to create a fast, reliable, and dynamic website that accurately represented the business's brand and values. We look forward to working with Designation Dump LLC and other businesses in the future to create high-performing and visually appealing websites."
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
