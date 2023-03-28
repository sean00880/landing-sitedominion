import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import {
  Accordion,
  AccordionItem,
  AccordionTitle,
  AccordionBody,
  IconWrapper,
  OpenIcon,
  CloseIcon,
} from 'common/components/Accordion';
import Container from 'common/components/UI/Container';
import { Icon } from 'react-icons-kit';
import { plus } from 'react-icons-kit/entypo/plus';
import { minus } from 'react-icons-kit/entypo/minus';

import FaqWrapper from '../Faq/faq.style';
import { FAQ_DATA } from 'common/data/SaasModern';

const FaqSection = ({
  sectionWrapper,
  row,
  col,
  secTitleWrapper,
  secHeading,
  secText,
  title,
  description,
  buttonWrapper,
  button,
}) => {
  return (
    <Box {...sectionWrapper} id="faq_section">
      <Container>
        <Box {...secTitleWrapper}>
          <Text {...secText} content="CONTACT US" />
          <Heading {...secHeading} content="Contact us for a custom quote (or anything else.)" />
        </Box>
        <Box {...row}>
          <Box {...col}>
            <FaqWrapper>
            <div className="content_holder">
								<div className="list">
				<div className="contact_left">
									<h3>-- Prefer cusotm pricing instead? Get Your Instant <span>FREE</span> Quote! --</h3>
									<hr />
									<div className="empty_notice"><span style={{'color':'#b73834'}}>Please Fill Required Fields</span></div>
									<form className="contact_form" action="/" method="post" autoComplete="off" data-email="frenifyteam@gmail.com">


										{/* Don't remove below code in avoid to work contact form properly.
									You can chance dat-success value with your one. It will be used when user will try to contact via contact form and will get success message. */}

										<div className="success" data-success="Your message has been received, we will contact you soon."></div>
										
										{/*  */}
										<div className="items">
											Name:
											<div className="item">
												
												<input id="name" type="text" placeholder="Name" />
											</div>
											Contact Information:
											<div className="item">
												
												<input id="email" type="email" placeholder="Email" />
											</div>
											<div className="item">
												<input id="name" type="text" placeholder="Your Address [1234, Main Street, CA - 12345]" />
											</div>
											<div className="item">
												
													Service: <br></br>
													<select type="select" style={{"fontSize":"23px","fontFamily":"Smooch Sans"}}>
														<option value="Web Design">Web Design & Development</option>
														<option value="Web Deployment">Website Deployment</option>
                            <option value="Blog">Blog</option>
														<option value="SEO">SEO</option>
														<option value="Website Copywriting">Website Copywriting</option>
													</select>
													
												
											</div>
											
										</div>
										<hr />
										<div className="items">
											<div className="item">
												Brief description of your requirements:
												<textarea id="message" placeholder="Message"></textarea>
											</div>
											<div className="button">
												<Link href="#"><a id="send_message">SUBMIT</a></Link>
											</div>
										</div>
									</form>
								</div>
				</div>
                                </div>
            </FaqWrapper>
            
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

FaqSection.propTypes = {
  sectionWrapper: PropTypes.object,
  secTitleWrapper: PropTypes.object,
  row: PropTypes.object,
  col: PropTypes.object,
  secHeading: PropTypes.object,
  secText: PropTypes.object,
  title: PropTypes.object,
  description: PropTypes.object,
  buttonWrapper: PropTypes.object,
  button: PropTypes.object,
};

FaqSection.defaultProps = {
  sectionWrapper: {
    as: 'section',
    pt: ['20px', '30px', '50px', '50px'],
    pb: ['60px', '80px', '80px', '80px'],
  },
  secTitleWrapper: {
    mb: ['55px', '65px'],
  },
  secText: {
    as: 'span',
    display: 'block',
    textAlign: 'center',
    fontSize: '21px',
    letterSpacing: '0.15em',
    fontWeight: '700',
    color: '#4445a0',
    mb: '5px',
  },
  secHeading: {
    textAlign: 'center',
    fontSize: ['29px', '29px'],
    fontWeight: '500',
    color: '#0f2137',
    letterSpacing: '-0.025em',
    mb: '0',
    lineHeight: '1.67',
  },
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  col: {
    width: ['100%', '100%', '75%', '75%'],
  },
  title: {
    fontSize: ['23px', '25px'],
    fontWeight: '400',
    color: 'headingColor',
    letterSpacing: '-0.025em',
    mb: 0,
  },
  description: {
    fontSize: '15px',
    color: 'textColor',
    lineHeight: '1.75',
    mb: 0,
  },
  buttonWrapper: {
    mt: '50px',
    flexBox: true,
    justifyContent: 'center',
  },
  button: {
    type: 'button',
    fontSize: '21px',
    fontWeight: '600',
    borderRadius: '4px',
    pl: ['22px'],
    pr: ['22px'],
    colors: 'secondaryWithBg',
    minWidth: '150px',
  },
};

export default FaqSection;
