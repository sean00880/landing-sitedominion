import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import { useRef } from 'react';
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
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_it2ab1j', 'template_y4eut5v', form.current, 'jUn1z-vodKfQLijZ7')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  
  const openInNewTab = (url) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
    if (newWindow) newWindow.opener = null
}
  return (
    <Box {...sectionWrapper} id="contact_section">
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
									<h3>-- Prefer custom pricing instead? Get Your Instant <span>FREE</span> Quote! --</h3>
									<hr />
									<div className="empty_notice"><span style={{'color':'#b73834'}}>Please Fill Required Fields</span></div>
									<form className="contact_form" action="/" method="post" autoComplete="off" data-email="service@sitedominion.com"  ref={form} onSubmit={sendEmail}>


										{/* Don't remove below code in avoid to work contact form properly.
									You can chance dat-success value with your one. It will be used when user will try to contact via contact form and will get success message. */}

										<div className="success" data-success="Your message has been received, we will contact you soon."></div>
										
										{/*  */}
										<div className="items">
											Name:
											<div className="item">
												
												<input id="name" type="text" name="name" placeholder="Name" />
											</div>
											Contact Information:
											<div className="item">
												
												<input id="email" type="email" name="email" placeholder="Email" />
											</div>
											<div className="item">
												<input id="name" type="text" name="contact" placeholder="Your phone number [+1(000)00-0000]" />
											</div>
											<div className="item">
												
													Service: <br></br>
													<select type="select" name="service" style={{"fontSize":"23px","fontFamily":"Smooch Sans","border":"1px solid #9a9a9a"}}>
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
												<textarea name="message" id="message" placeholder="Message"></textarea>
											</div>
											<div className="button">
											<button type="submit" id="send_message" onClick={()=> openInNewTab("/thankyou")}>SUBMIT</button>
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
