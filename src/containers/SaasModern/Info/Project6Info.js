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
import ImageOne from 'common/assets/image/saasModern/sd2.png';
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
            <h3>Website Link: <a href="https://mhc-olive.vercel.app/">https://mhc-olive.vercel.app/</a></h3>
            <Text
              {...description}
              content="In the ever-changing realm of web design,San Diego Custom Backyard & Landscaping Prototype Website emerges as a breath of fresh air, offering a stunning landscaping template website that transcends the boundaries of traditional aesthetics. With an unwavering commitment to providing an unparalleled user experience, VerdantVistas amalgamates artistic ingenuity and cutting-edge technology, beckoning all landscaping enthusiasts to embark on a captivating journey of boundless inspiration."/>
            
          </Box>
          
        </Box>
  
      </Container>
      <Container>
        <Box {...row} {...textAreaRow}>
          <Box {...col} {...textArea}>
            <Text
              {...description}
              content="Tucked within the virtual realm, San Diego Custom Backyard & Landscaping Prototype Website serves as a captivating oasis where visitors can quench their thirst for imaginative landscaping endeavors. Weaving a tapestry of picturesque designs and lush greenery, our templates transcend the mundane, whisking users away to an enchanting world where possibilities bloom like vibrant flowers."/>

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
              content="San Diego Custom Backyard & Landscaping Prototype Website is built using the powerful combination of NextJS, Vercel, and Github. NextJS, a popular React framework, provides a robust foundation for creating dynamic and high-performance web applications. Vercel, a leading cloud platform, ensures seamless deployment, scalability, and global CDN (Content Delivery Network) for optimal user experience. Github serves as the version control and collaboration platform, enabling efficient code management and continuous integration."/>
              <Heading
              {...title}
              content="Design Considerations"
            />
          </Box>
        </Box>
  
      </Container>
      <Container>
        <Box {...row} {...textAreaRow} style={{"flexDirection":"row"}}>
          <Box {...col} {...textArea} style={{"width":"100%"}}>
          
          <Text
              {...description}
              content="The design of the landscaping template website focuses on creating an immersive and visually stunning experience for visitors. A clean and modern aesthetic is employed, with attention to detail in typography, color palette, and overall layout. The design is responsive, ensuring that the website looks and functions flawlessly across a variety of devices and screen sizes. User-friendly navigation and intuitive interactions are prioritized, allowing users to effortlessly explore the available landscaping templates and find inspiration for their own projects."/>
            
            <Heading
              {...title}
              content="Key Features"
            />
          <Text
              {...description}
              content="This prototype website boasts several key features that enhance its functionality and user experience. Firstly, we offer a user-friendly contact form that enables visitors to easily get in touch with landscaping businesses, fostering direct communication and lead generation. Additionally, the website showcases an extensive range of services offered by landscaping professionals, providing comprehensive information to potential clients. With its intuitive interface and visually appealing design, the website ensures that users can effortlessly explore and access the services they require."/>
            
            <Heading
              {...title}
              content="Conclusion"
            />
          <Text
              {...description}
              content="In summary, our featured landscaping template website combines a cutting-edge technology stack, thoughtful design considerations, and essential features to create a compelling online platform for landscaping businesses. With a focus on user experience, lead generation, and seamless functionality, we aim to provide a valuable tool that enables businesses to showcase their expertise, connect with potential clients, and ultimately drive success in the competitive landscaping industry."/>
            
            
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
