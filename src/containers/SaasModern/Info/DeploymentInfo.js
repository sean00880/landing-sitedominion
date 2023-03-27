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
import ImageOne from 'common/assets/image/saasModern/3.webp';
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
              content="Website Deployment"
              style={{"textAlign":"center"}}
            />
            <Text
              {...description}
              content="We can help you stand out from the competition by selecting the appropriate color schemes, digital elements, and design aspects that appeal to your target audience thanks to our years of experience in the web design sector. We go above and beyond to design a website that precisely embodies your business and enables you to establish deeper connections with both potential and current clientswe understand that building a website is just the first step in your online journey. Once your website is designed and developed, it needs to be deployed and launched to the world."
            />
            
          </Box>
          
        </Box>
  
      </Container>
      <Container>
        <Box {...row} {...textAreaRow}>
          <Box {...col} {...textArea}  >
            <Text 
            {...description}
            content="This is where our website deployment services come in. We offer a comprehensive range of deployment services to ensure that your website is launched quickly and seamlessly, with minimal downtime and maximum impact. Our team of experts will work with you to identify the best deployment strategy for your website, whether it's a simple static site or a complex web application. We take care of everything, from configuring your server to optimizing your website's performance, so you can focus on growing your business."
            />
            <Heading
              {...title}
              content="1) Domain & Hosting"
            />
            <Text
              {...description}
              content="Our team of experts provides end-to-end website deployment services, starting with domain registration and hosting setup. We'll work with you to identify the best domain name for your website and help you select the right hosting plan based on your needs and budget."
            />
            
          </Box>
        </Box>
  
      </Container>
      <Container>
        <Box {...row} {...textAreaRow}>
          <Box {...col} {...textArea}>
          
            <Heading
              {...title}
              content="2) Post Setup Configuration"
            />
            <Text
              {...description}
              content="Once your domain and hosting are set up, we'll take care of the technical aspects of website deployment, including website installation, configuration, and testing. Our team will ensure that your website is set up correctly and functions as expected, so you can focus on creating engaging content and building your brand."
            />
  
  </Box>
        </Box>
        <Box {...row} {...textAreaRow}>
          <Box {...col} {...textArea} style={{"width":"100%"}}>
            <Heading 
              {...title}
              content="3) Optimization & Maintainance"
            />

            <Text 
              {...description} 
              content="With Site Dominion, you can rest assured that your website will be deployed using best practices and optimized for performance, security, and search engine visibility. We'll also provide ongoing support and maintenance to ensure that your website stays up-to-date and secure."
            />
          </Box>
          </Box>
      </Container>
      <Container>
        <Box {...row} {...textAreaRow} style={{"flexDirection":"row"}}>
          <Box {...col} {...textArea} style={{"width":"100%"}}>
            <Heading
              {...title}
              content="Conclusion"
            />
            <Text
              {...description}
              content="Partnering with Site Dominion for website deployment and related services means you can get back to what you do best - running your business - while we take care of the technical details. Contact us today to learn more about our website deployment and development services and how we can help you build a strong online presence."
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
    ml: '-15px',
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
    width: ['100%', '100%', '50%', '50%', '45%'],
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
