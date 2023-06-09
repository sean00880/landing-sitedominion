import { themeGet } from '@styled-system/theme-get';
import styled from 'styled-components';

const Section = styled.section`
  padding-top: 60px;
  padding-bottom: 120px;
  @media (max-width: 1563px) {
    padding-bottom: 80px;
  }
  @media (max-width: 1029px) {
    padding-top: 50px;
    padding-bottom: 50px;
  }
  @media (max-width: 768px) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
`;

export const SectionHeading = styled.div`
  text-align: center;
  h2 {
    font-weight: 800;
    line-height: 36px;
    letter-spacing: -0.5px;
    @media (min-width: 1029px) {
      font-size: 26px;
    }
    @media (max-width: 600px) {
      font-size: 33px;
    }
    @media (max-width: 520px) {
      font-size: 25px;
    }
  }
`;

export const Grid = styled.div`
  --marginTop: 80px;
  margin-top: var(--marginTop);
  gap: 45px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 1219px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 1280px) {
    gap: 18px;
  }
  @media (max-width: 1029px) {
    gap: 20px;
    --marginTop: 60px;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 290px);
    justify-content: center;
    gap: 50px 40px;
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(1, 1fr);
    --marginTop: 45px;
  }
`;

export const Item = styled.div`
  text-align: center;
  @media (min-width: 992px) and (max-width: 1219px) {
    max-width: 300px;
    margin: 0 auto;
  }
  &:hover {
    figure {
      animation: var(--shakeAnim);
    }
  }
  figure {
    margin: 0 0 40px;
    min-height: 110px;
    @media (min-width: 769px) and (max-width: 1029px) {
      min-height: auto;
      margin-bottom: 30px;
    }
    @media (max-width: 480px) {
      margin-bottom: 20px;
      min-height: auto;
    }
  }
  img {
    margin: 0 auto;
    @media (max-width: 1029px) {
      max-width: 70px;
    }
  }
  h4 {
    font-weight: bold;
    font-size: 25px;
    line-height: 25px;
    @media (max-width: 1029px) {
      font-size: 17px;
    }
    @media (max-width: 480px) {
      font-size: 21px;
      margin-bottom: 5px;
    }
  }
  p {
    color: ${themeGet('colors.textColor')};
    font-size: 21px;
    font-weight: 500;
    line-height: 2;
    @media (min-width: 769px) and (max-width: 1029px) {
      font-size: 15px;
      line-height: 1.9;
    }
    @media (max-width: 480px) {
      font-size: 15px;
      max-width: 330px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  a {
    color: ${themeGet('colors.linkColor')};
    font-size: 15px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: -0.1px;
    @media (min-width: 769px) and (max-width: 1029px) {
      font-size: 21px;
    }
    i {
      line-height: 1;
      transform: translateX(2px);
      transition: 0.3s ease 0s;
    }
    &:hover i {
      transform: translateX(5px);
    }
  }
`;

export default Section;
