import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Icon from 'react-icons-kit';
import Fade from 'react-reveal/Fade';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import NextImage from 'common/components/NextImage';
import Container from 'common/components/UI/Container';
import TiltShape from '../TiltShape';
import { BannerWrapper, DiscountWrapper, DiscountLabel } from './banner.style';
import BannerImage from 'common/assets/image/saasModern/sd.png';
import { ic_play_circle_filled } from 'react-icons-kit/md/ic_play_circle_filled';

const BannerSection = ({
  row,
  contentWrapper,
  discountAmount,
  discountText,
  title,
  description,
  imageWrapper,
  buttonWrapper,
  button,
  fillButton,
}) => {
  return (
    <BannerWrapper id="banner_section">
      <TiltShape />
      <Container>
        <Box {...row}>
          <Box {...contentWrapper}>
            <Heading
              {...title}
              content="San Diego Custom Backyard & Landscaping - A Landscaping Prototype Website"
            />
            <Text
              {...description}
              content="San Diego Custom Backyard & Landscaping is an exceptional virtual destination that caters to individuals seeking awe-inspiring outdoor transformations in the mesmerizing region of San Diego."
            />
          </Box>
          <Box {...imageWrapper}>
            <Fade bottom>
              <NextImage src={BannerImage} alt="banner image" />
            </Fade>
          </Box>
        </Box>
      </Container>
    </BannerWrapper>
  );
};

BannerSection.propTypes = {
  row: PropTypes.object,
  contentWrapper: PropTypes.object,
  discountAmount: PropTypes.object,
  discountText: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  imageWrapper: PropTypes.object,
  buttonWrapper: PropTypes.object,
  button: PropTypes.object,
  fillButton: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentWrapper: {
    width: ['100%', '100%', '80%', '55%', '50%'],
    mb: '40px',
  },
  title: {
    fontSize: ['29px', '32px', '40px', '42px', '46px'],
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '-0.025em',
    mt: ['30px', '33px', '33px', '37px', '39px'],
    mb: ['30px', '33px', '33px', '37px', '39px'],
    lineHeight: '1.2',
    textAlign: 'center',
  },
  description: {
    fontSize: ['15px', '16px', '16px', '16px', '16px'],
    color: '#fff',
    lineHeight: '1.75',
    mb: '0',
    textAlign: 'center',
  },
  discountAmount: {
    fontSize: ['13px', '21px', '21px', '21px', '21px'],
    fontWeight: '700',
    color: '#00865b',
    mb: 0,
    as: 'span',
    mr: '0.4em',
  },
  discountText: {
    fontSize: ['13px', '21px', '21px', '21px', '21px'],
    fontWeight: '700',
    color: '#fff',
    mb: 0,
    as: 'span',
  },
  fillButton: {
    type: 'button',
    fontSize: ['13px', '21px'],
    fontWeight: '600',
    borderRadius: '4px',
    p: ['0px 15px', '8px 22px'],
    colors: 'secondaryWithBg',
    minWidth: ['auto', '150px'],
    height: ['40px', '46px'],
    minHeight: 'auto',
  },
  buttonWrapper: {
    flexBox: true,
    justifyContent: 'center',
    mt: '35px',
  },
  button: {
    type: 'button',
    fontSize: ['13px', '21px'],
    fontWeight: '600',
    borderRadius: '4px',
    p: ['0px 15px', '8px 22px'],
    color: '#fff',
    colors: 'secondary',
    height: ['40px', '46px'],
    minHeight: 'auto',
  },
};

export default BannerSection;
