import React from 'react';
import { NextSeo } from 'next-seo';
import styled from 'styled-components';
import Header from '../components/Header';

const Layout = styled.div`
  height: 100vh;
  padding: 3rem;
`;

const Paragraph = styled.p`
  font-size: 1.75rem;
  padding: 3rem 12rem 3rem 0rem;
`;

const Index = () => (
  <Layout>
    <NextSeo
      title="Portfolio Akhmetov Tokhtar"
      description="Portfolio of Akhmetov Tokhtar. Junior web developer from Astana,
    Kazakhstan. React, Node, Next, C#, Python, Django"
    />
    <Header />
    <Paragraph>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore quisquam ex est molestiae
      quod deleniti quos, ipsum quaerat quia facere nulla nemo! Ipsum doloribus, ex accusamus magni
      beatae autem enim. Veniam, quaerat cum optio eligendi eaque repellendus natus non incidunt,
      deleniti, quasi quis tempora molestias sit corrupti? Voluptate nesciunt quam deserunt sit
      ipsum ullam numquam, natus voluptatibus itaque, autem velit? Ea praesentium ullam sed omnis
      numquam? Totam praesentium enim vero exercitationem sunt est nisi inventore cumque, debitis
      commodi! Reprehenderit omnis architecto blanditiis, nemo voluptatibus minus! Aspernatur illum
      harum voluptate id! Similique exercitationem obcaecati debitis recusandae praesentium
      dignissimos officia incidunt? Ullam eum incidunt dicta, nemo ipsam rerum sequi ad quia dolorum
      voluptatem excepturi cupiditate animi eaque quaerat beatae consectetur expedita at! Eligendi
      id harum vel ratione omnis corporis itaque ab commodi nulla odit atque odio, libero labore
      quaerat inventore obcaecati voluptatum architecto iusto. Unde asperiores illum cumque
      consectetur dolorum quod odio? Laboriosam, alias repellendus? Rem nulla officiis dolore est
      cum, expedita voluptates rerum consequuntur. Reprehenderit repellat maxime mollitia non
      laudantium, voluptatem expedita recusandae officiis vero consectetur sed, exercitationem
      molestiae iure sit? Quod perferendis omnis porro non, iste quos laudantium repellendus, enim
      quibusdam quis adipisci inventore illum blanditiis quae in. Quia odio omnis voluptatum optio
      delectus cumque enim dicta necessitatibus ipsum nihil? Architecto fugit, ea expedita ullam
      cupiditate, harum omnis repudiandae et beatae eaque accusantium quas dignissimos quibusdam
      accusamus a eligendi tenetur incidunt fuga debitis molestiae veritatis assumenda perferendis
      libero enim. Sunt! Beatae, perferendis facilis. Mollitia nemo pariatur ad, consequuntur magni
      debitis optio tenetur vero odit, illum ipsam! Perferendis distinctio similique facere eius
      sint, impedit autem maiores laborum in doloribus quo ut. Consequatur, nisi quo non deleniti
      animi vel rerum ut reiciendis explicabo obcaecati expedita hic. Quam doloribus magni explicabo
      tenetur repellendus, expedita quidem sint a iure minima ducimus excepturi? Animi, fuga?
    </Paragraph>
  </Layout>
);

export default Index;
