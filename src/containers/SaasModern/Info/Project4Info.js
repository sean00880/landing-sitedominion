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
import ImageOne from 'common/assets/image/saasModern/articulateinsurance.png';
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
            <h3>Website Link: <a href="https://articulateinsurance.vercel.app/">https://articulateinsurance.vercel.app/</a></h3>
            <Text
              {...description}
              content="Articulate Insurance is a prototype project built by Site Dominion, a web development agency, to showcase our skills in creating custom websites for insurance companies. The project was built using Next.js, a powerful web framework that provides server-side rendering and static site generation capabilities. The website features a modern and clean design that reflects the business's values and goals."/>
            
          </Box>
          
        </Box>
  
      </Container>
      <Container>
        <Box {...row} {...textAreaRow}>
          <Box {...col} {...textArea}>
            <Heading
              {...title}
              content="Design"
            />
            <Text
              {...description}
              content="The website design features a blue and white color scheme, which is commonly associated with professionalism and trustworthiness. The homepage features a hero image of a happy family, along with a prominent call-to-action button that encourages users to get a quote. The website's services page provides detailed information about the different insurance services offered by Articulate Insurance, along with pricing information. The website also has a blog section where the business can share news and insights with its customers. In addition, the website has a contact page that allows users to send a message directly to the business.
              "/>

            
          </Box>
        </Box>
  
      </Container>
      <Container>
        <Box {...row} {...textAreaRow}>
          <Box {...col} {...textArea}>
          <Heading
              {...title}
              content="Functionality"
            />
            <Text
              {...description}
              content="The website has several features that make it easy for users to learn about the business's insurance services and contact them for a quote. The homepage features a prominent call-to-action button that encourages users to get a quote. The website's services page provides detailed information about the different insurance services offered by Articulate Insurance, along with pricing information. The website also has a blog section where the business can share news and insights with its customers. In addition, the website has a contact page that allows users to send a message directly to the business."/>
                
          </Box>
        </Box>
  
      </Container>
      <Container>
        <Box {...row} {...textAreaRow} style={{"flexDirection":"row"}}>
          <Box {...col} {...textArea} style={{"width":"100%"}}>
          <Heading
              {...title}
              content="Technology Stack"
            />
          <Text
              {...description}
              content="Site Dominion used Next.js as the web framework for the project. Next.js is a powerful web framework that provides server-side rendering and static site generation capabilities, which allows for faster page loading times and improved SEO. The website was styled with CSS, and the content was managed with a headless CMS, allowing for easy updates and changes. "/>
            
            <Heading
              {...title}
              content="Conclusion"
            />
          <Text
              {...description}
              content="Articulate Insurance is a prototype project built by Site Dominion to showcase our skills in creating custom websites for insurance companies. The website's design reflects the business's values and goals, and its functionality makes it easy for users to learn about the business's insurance services and contact them for a quote. The use of Next.js allowed Site Dominion to build a performant and flexible website that will help Articulate Insurance attract new customers and grow their business. The website's headless CMS also allows for easy updates and changes, ensuring that the website remains up-to-date with the latest information."/>
            

            
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
