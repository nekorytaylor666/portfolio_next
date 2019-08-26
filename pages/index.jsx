import React from 'react';
import { NextSeo } from 'next-seo';
import styled from 'styled-components';
import Gallery from '../components/Gallery';
import Header from '../components/Header';
import Main from '../components/Main';

const Layout = styled.div`
  height: 100vh;
  padding: 3rem;
`;

const Index = () => (
  <Layout>
    <NextSeo
      title="Portfolio Akhmetov Tokhtar"
      description="Portfolio of Akhmetov Tokhtar. Junior web developer from Astana,
    Kazakhstan. React, Node, Next, C#, Python, Django"
    />
    <Header />
    <Main />
    <Gallery />
  </Layout>
);

export default Index;
