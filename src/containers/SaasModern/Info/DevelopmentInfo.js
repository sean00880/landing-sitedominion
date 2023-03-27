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
              content="Web Design & Development"
              style={{"textAlign":"center"}}
            />
            <Text
              {...description}
              content="We can help you stand out from the competition by selecting the appropriate color schemes, digital elements, and design aspects that appeal to your target audience thanks to our years of experience in the web design sector. We go above and beyond to design a website that precisely embodies your business and enables you to establish deeper connections with both potential and current clients."
            />
            
          </Box>
          
        </Box>
  
      </Container>
      <Container>
        <Box {...row} {...textAreaRow}>
          <Box {...col} {...textArea} style={{"width":"100%"}}>
            <Heading
              {...title}
              content="Enterprise Level Website Design & Development"
            />
            <Text
              {...description}
              content="We directly collaborate with small businesses & enterprise-level clients to build exceptional, high-performing, and secure custom websites with a focus on distinctive, polished web design. Regardless of what your project calls for, Site Dominion has the resources and expertise to guarantee that your objectives are met with beyond satisfactory results."
            />
            
          </Box>
        </Box>
  
      </Container>
      <Container>
        <Box {...row} {...textAreaRow}>
          <Box {...col} {...textArea}>
          <Heading
              {...title}
              content="Why Choose Site Dominion?"
            />
            <Heading
              {...title}
              content="1) Improve Sales And Profitability"
            />
            <Text
              {...description}
              content="A visually appealing website will encourage people to browse it at ease. As a result, customers will have more faith in your products or services and are more inclined to buy from you, boosting your profitability and revenue."
            />

            <Text 
              {...description}
              content="For both user satisfaction and increasing your exposure on search engines like Google and Bing, you need a complete SEO-friendly website design. At Site Dominion, we are aware of the effort required to create an effective website. We offer small businesses web design and development services with a user interface (UI) and experience (UX) focus that is centered on SEO. From the moment your site launches, our excellent, cost-effective design service will optimize it to outperform your rivals. We will work with you to design your website from the ground up with growth in mind, whether you're starting a new company or enhancing an existing one."
            />
            
          </Box>
        </Box>
  
      </Container>
      <Container>
        <Box {...row} {...textAreaRow} style={{"flexDirection":"row"}}>
          <Box {...col} {...textArea} style={{"width":"100%"}}>
            <Heading
              {...title}
              content="2) Fully Responsive On All Screen Sizes"
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
