import styled from 'styled-components';
import devices from '../tools/mediaQueries';

const Title = styled.h1`
  font-size: 9rem;
  font-weight: inherit;
`;

const SubTitle = styled.h2`
  font-size: 3rem;
  font-weight: bold;
`;

const Paragraph = styled.p`
  font-size: 2rem;
  font-weight: inherit;
  @media ${devices.laptop} {
    font-size: 1.5rem;
  }
`;

export { Title, SubTitle, Paragraph };
