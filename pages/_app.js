/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { createGlobalStyle } from 'styled-components';

const DEFAULT_SEO = {
  title: 'Portfolio Akhmetov Tokhtar',
  description: `Portfolio of Akhmetov Tokhtar. Junior web developer from Astana,
    Kazakhstan. React, Node, Next, C#, Python, Django`,
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://akmt.me',
    title: 'Portfolio Akhmetov Tokhtar',
    description: `Portfolio of Akhmetov Tokhtar. Junior web developer from Astana,
      Kazakhstan. React, Node, Next, C#, Python, Django`,
    site_name: 'akmt.me',
  },
};

const GlobalStyle = createGlobalStyle`
    body {
            font-family: 'Playfair Display', serif;
            background-color: black;
            color: white;
          }

          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          .hover {
            transition: 0.3s;
          }
          .index:hover {
            color: white;
          }

          /* On screens that are 992px wide or less, go from four columns to two columns */
          @media screen and (max-width: 992px) {
            html {
              font-size: 14px;
            }
          }

          @media screen and (max-width: 600px) {
            html {
              font-size: 8px;
            }
          }
          @media screen and (max-width: 320px) {
            html {
              font-size: 6px;
            }
          }
`;

class MyApp extends App {
  // static async getInitialProps({ Component, ctx }) {
  //   let pageProps = {};

  //   if (Component.getInitialProps) {
  //     pageProps = await Component.getInitialProps(ctx);
  //   }

  //   return { pageProps };
  // }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Playfair+Display:400,700&display=block"
            rel="stylesheet"
            defer
          />
          <script src="https://kit.fontawesome.com/810c0a2f4e.js" defer />
        </Head>
        <NextSeo config={DEFAULT_SEO} />
        <Component {...pageProps} />
        <GlobalStyle />
      </Container>
    );
  }
}

export default MyApp;
