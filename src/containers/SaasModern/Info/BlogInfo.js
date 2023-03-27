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
              content="Blog Development & Setup"
              style={{"textAlign":"center"}}
            />
            <Text
              {...description}
              content="With the help of a corporate blog, you can engage with your audience and promote consistent online brand messaging. The way your blog is laid out, though, can significantly influence how readers interact with it."
            />
            
          </Box>
          
        </Box>
  
      </Container>
      <Container>
        <Box {...row} {...textAreaRow}>
          <Box {...col} {...textArea} style={{"width":"100%"}}>
            <Heading
              {...title}
              content="Why Own a Blog?"
            />
            <Text
              {...description}
              content="When setting up and maintaining a blog, you will communicate with your intended audience directly. It offers your business the possibility to spread messages that may not otherwise be heard. A blog may be used for everything, from announcing new products and significant updates to establishing your business as an industry authority."
            />

            <Text
            {...description}
            content="By optimizing your web pages, including your blog entries, you may increase the number of people who find your business online by using search engines like Google. Ranking criteria are used by Google and other search engines to determine the results that appear for each search query. It determines how and where to prioritize those results as well. "
            />
            
          </Box>
        </Box>
  
      </Container>
      <Container>
        <Box {...row} {...textAreaRow}>
          <Box {...col} {...textArea}>
          <Heading
              {...title}
              content="How Does Blogging Tie In With SEO?"
            />
            <Text
              {...description}
              content="As previously mentioned, ranking factors are used by Google and other search engines to determine the results that appear for each search query. It determines how to rank those results as well. Site Dominion can improve your website's performance on search results by taking in consideration the following factors:"
            />
            <Heading
              {...title}
              content="1) Rate Of Organic Clicks"
            />
            <Text 
              {...description}
              content="Blogs have the ability to respond to transactional, informative, and navigational search inquiries. More forms of content can result in more clicks on your pages, which will boost your SEO."
            />
            
          </Box>
        </Box>
  
      </Container>
      <Container>
        <Box {...row} {...textAreaRow} style={{"flexDirection":"row"}}>
          <Box {...col} {...textArea} style={{"width":"100%"}}>
            <Heading
              {...title}
              content="2) Indexing More Pages"
            />
            <Text
              {...description}
              content="Search engines prefer reliable and credible websites. They want to provide trustworthy information to website users, and one method they might do this is by counting the number of indexed pages on a website.

              Having a bigger website typically means it is a better source of information. Smaller websites can still outrank larger ones since search engines understand that this isn't always the case."
            />
             <Heading
              {...title}
              content="3) Backlinks & Internal Links"
            />
            <Text
              {...description}
              content="Backlinks function as a kind of online review process. It's more probable that your website will rank in search results if your blog has backlinks from reputable websites. Blog postings typically draw more high-quality backlinks since they are more likely to educate and generate awareness for readers. You give users a clear path to follow when you link from one page on your website to another. Internal links can also help visitors find the stuff they're seeking for on your website. These links also assist web crawlers in understanding how your site is structured. A blog adds more website pages that you can internally link to. It also provides you with the opportunity to point website visitors to other pages that can benefit your users."
            />
             <Heading
              {...title}
              content="What Sets Us Apart?"
            />
            <Text
              {...description}
              content="Our blog designers are aware of the significance of blogging for businesses. Consequently, they put the same amount of effort into producing blogs as they do into creating complete corporate websites."
            />
             <Heading
              {...title}
              content="Conclusion"
            />
            <Text
              {...description}
              content="Spread the word about your story by choosing Site Dominion to setup your blog. Make a statement with a blog website that has been expertly designed and can be modified to meet your brand."
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
