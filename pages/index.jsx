import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Main from '../components/Main';

const Layout = styled.div`
  padding: 3rem;
`;

const Index = () => (
  <Layout>
    <Header />
    <Main />
  </Layout>
);

export default Index;
