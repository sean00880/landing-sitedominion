import styled from 'styled-components';
import BgImage from 'common/assets/image/saasModern/dash-bg.png';

const InfoSectionWrapper = styled.section`
  padding: 0px 0 0px 0;
  @media (max-width: 1600px) {
    padding: 25px 0 0px 100px;
  }
  @media (max-width: 1400px) {
    padding: 0px 0 0px 0;
  }
  @media (max-width: 1300px) {
    padding: 0;
  }
  @media (max-width: 1199px) {
    padding: 100px 0 100px 0;
  }
  @media (max-width: 767px) {
    padding: 30px 0 60px 0;
  }
  .info-sec-container {
    @media (min-width: 768px) {
      position: absolute;
      top: 40%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
    }
    @media (max-width: 768px) and (min-width: 768px) {
      top: 40%;
    }
    @media (max-width: 767px) {
      padding-bottom: 40px;
    }

    .image_area {
      background-image: url(${BgImage?.src});
      background-position: bottom left;
      background-size: contain;
      background-repeat: no-repeat;
      padding: 50px 0 60px 0;
      @media (max-width: 767px) {
        padding-top: 0;
      }
    }
  }
`;

export default InfoSectionWrapper;
