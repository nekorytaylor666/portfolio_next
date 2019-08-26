import React, { useState } from 'react';
import Swiper from 'react-id-swiper';
import styled from 'styled-components';
import { Paragraph, SubTitle } from './TextTags';
import devices from '../tools/mediaQueries';

const Img = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 3rem;
  @media ${devices.mobileL} {
    grid-template-columns: 1fr;
  }
`;

const DescContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Default = () => {
  const params = {
    lazy: true,
    effect: 'cube',
    grabCursor: true,
  };
  return (
    <Swiper {...params}>
      <Container>
        <Img src="/static/gallery/newyork.png" />
        <DescContainer>
          <SubTitle>Who am i?</SubTitle>
          <Paragraph>
            I'm a junior developer from Kazakhstan, Astana. I really like to code and create stuff.
            My point is to become an engineer who not only write code, but also design architecture
            of app and business in web. Last year i fell into Javascript with react, next and node
            js. But i'm also experienced in python/django and .NET/C# backend developing.
          </Paragraph>
        </DescContainer>
      </Container>
      <Container>
        <Img src="/static/gallery/bridge.png" />
        <DescContainer>
          <SubTitle>Who am i?</SubTitle>
          <Paragraph>
            I'm a junior developer from Kazakhstan, Astana. I really like to code and create stuff.
            My point is to become an engineer who not only write code, but also design architecture
            of app and business in web. Last year i fell into Javascript with react, next and node
            js. But i'm also experienced in python/django and .NET/C# backend developing.
          </Paragraph>
        </DescContainer>
      </Container>
      <Container>
        <Img src="/static/gallery/siting.jpg" />
        <DescContainer>
          <SubTitle>Who am i?</SubTitle>
          <Paragraph>
            I'm a junior developer from Kazakhstan, Astana. I really like to code and create stuff.
            My point is to become an engineer who not only write code, but also design architecture
            of app and business in web. Last year i fell into Javascript with react, next and node
            js. But i'm also experienced in python/django and .NET/C# backend developing.
          </Paragraph>
        </DescContainer>
      </Container>
      <Container>
        <Img src="/static/gallery/timesquare.jpg" />
        <DescContainer>
          <SubTitle>Who am i?</SubTitle>
          <Paragraph>
            I'm a junior developer from Kazakhstan, Astana. I really like to code and create stuff.
            My point is to become an engineer who not only write code, but also design architecture
            of app and business in web. Last year i fell into Javascript with react, next and node
            js. But i'm also experienced in python/django and .NET/C# backend developing.
          </Paragraph>
        </DescContainer>
      </Container>
    </Swiper>
  );
};
export default Default;
