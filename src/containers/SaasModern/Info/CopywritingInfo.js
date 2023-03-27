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
              content="Online Copywriting That Improves Search Engine Rankings"
              style={{"textAlign":"center"}}
            />
            <Text
              {...description}
              content="Writing targeted, promotional material for service sites, landing pages, category pages, and everything in between is known as website copywriting. It can be easier to draw people to your website and convince them to convert if your website copy is interesting."
            />
            
          </Box>
          
        </Box>
  
      </Container>
      <Container>
        <Box {...row} {...textAreaRow}>
          <Box {...col} {...textArea}>
            <Heading
              {...title}
              content="What Pages Are Covered?"
            />
            <Text
              {...description}
              content="No matter the subject, Site Dominion's copywriting service is ideal for producing powerful copy that can be used for your homepage, service pages, about us pages, or any other landing page. Our services are frequently utilized to revamp already-existing web pages or to create content for a brand-new collection of pages."
            />
            
          </Box>
        </Box>
  
      </Container>
      <Container>
        <Box {...row} {...textAreaRow}>
          <Box {...col} {...textArea}>
          <Heading
              {...title}
              content="Do You Include Images In Your Content Writing/Management Services?"
            />
            <Text
              {...description}
              content="Certainly, we can supply images that are free to use on your websites. Also, we have skilled graphic designers on hand. If necessary, they can assist you with producing unique logos, infographics, and illustrations."
            />
           
            
          </Box>
        </Box>
  
      </Container>
      <Container>
        <Box {...row} {...textAreaRow} style={{"flexDirection":"row"}}>
          <Box {...col} {...textArea} style={{"width":"100%"}}>
          <Heading
              {...title}
              content="How Long Does It Take For SEO Rankings To Improve?"
            />
            <Text 
              {...description}
              content="Although SEO rankings can increase immediately, it might take 6 months or a year before you notice a noticeable shift. The primary causes of this are the always evolving search engine algorithms and market trends.

              You can relax knowing that we have seasoned SEO experts and online copywriters working for us. Together, they create a content marketing plan that quickly raises your search engine ranks."
            />
            <Heading
              {...title}
              content="Conclusion"
            />
            <Text
              {...description}
              content="Our team of web geeks will create website content for you that greatly increases your prospect-to-customer ratio by using the appropriate amount of catchphrases and trigger words. In order to increase your website's visibility on search engines like Google, Bing, Yahoo, and others, your web material will also be search engine optimized. We are the masters of writing site material, regardless of the style you require: funny, direct, straightforward instructive, or enthralling persuading!"
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
