import React from 'react';
import styled from 'styled-components';
import Anch from './Anch';
import Contacts from './Contacts';
import devices from '../tools/mediaQueries';

const Title = styled.h1`
  font-size: 9rem;
  font-weight: 100;
`;

const SubTitle = styled.h2`
  font-size: 3rem;
  font-weight: inherit;
`;

const Img = styled.img`
  height: ${prop => prop.height};
  margin-right: 10px;
`;

const SubTitleLayout = styled.div`
  display: flex;
  align-items: center;
`;

const ContactsLayout = styled.div`
  justify-self: start;
  align-self: end;
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  margin-bottom: 3rem;
  @media ${devices.mobileL} {
    margin-bottom: 12rem;
  }
`;

const CustomAnchLayout = styled.div`
  justify-self: center;
  @media ${devices.mobileL} {
    justify-self: end;
  }
`;

const SectionLayout = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr;
  height: 100%;
  margin-bottom: 3rem;
`;

const TitleContainer = styled.div`
  margin-top: 2rem;
`;

function Main() {
  return (
    <SectionLayout>
      <TitleContainer>
        <Title>Full stack</Title>
        <SubTitleLayout className="subtitle_container">
          <Img src="/static/ampersand.png" alt="" height="6rem" />
          <div className="subtitle_text_container">
            <SubTitle className="subtitle_text">Web developer</SubTitle>
            <SubTitle className="subtitle_text">Creator</SubTitle>
          </div>
        </SubTitleLayout>
      </TitleContainer>
      <ContactsLayout>
        <Contacts color="white" size="4x" width="400px" mobileWidth="200px" />
        <CustomAnchLayout>
          <Anch
            href="https://t.me/akmt_dev"
            className="contact"
            fontSize="2.5rem"
            color="white"
            underlineColor="#ef3340"
          >
            Contact me
          </Anch>
        </CustomAnchLayout>
      </ContactsLayout>
    </SectionLayout>
  );
}

export default Main;
