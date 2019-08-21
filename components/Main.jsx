import React from 'react';
import styled from 'styled-components';
import Anch from './Anch';
import Contacts from './Contacts';

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
  margin: 10px;
`;

const SubTitleLayout = styled.div`
  display: flex;
  align-items: center;
`;

const ContactsLayout = styled.div`
  justify-self: start;
  align-self: end;
`;

const SectionLayout = styled.section`
  display: grid;
  grid-template-rows: 1fr 1fr;
  height: 80vh;
`;

function Main() {
  return (
    <SectionLayout>
      <div className="title_container">
        <Title>Full stack</Title>
        <SubTitleLayout className="subtitle_container">
          <Img src="/static/ampersand.png" alt="" height="6rem" />
          <div className="subtitle_text_container">
            <SubTitle className="subtitle_text">Web developer</SubTitle>
            <SubTitle className="subtitle_text">Creator</SubTitle>
          </div>
        </SubTitleLayout>
        <Anch href="/" className="contact" fontSize="1.5rem" color="white" underlineColor="#ef3340">
          Contact me
        </Anch>
      </div>
      <ContactsLayout>
        <Contacts color="white" size="4x" width="400px" mobileWidth="200px" />
      </ContactsLayout>
    </SectionLayout>
  );
}

export default Main;
