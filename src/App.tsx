import React from 'react';

import GlobalStyles from './styles/GlobalStyles';

import data from './data';

import Header from './components/Header';
import Section from './components/Section';
import Card from './components/Card';
import Product from './components/Product';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />

      <Section variant="gray-primary">
        <Product
          title="Este é o seu 365"
          description="Descruba uma nova possibilidade a cada dia com o Microsoft 365"
          link="Para até 6 pessoas"
          image="background-1.png"
        />
      </Section>

      <Section variant="white">
        <Card
          image={data[0].image}
          title={data[0].title}
          description={data[0].description}
          link="Saiba mais"
        />
        <Card
          image={data[1].image}
          title={data[1].title}
          description={data[1].description}
          link="Participe já"
        />
        <Card 
          image={data[2].image}
          title={data[2].title}
          description={data[2].description}
          link="Baixe agora"
        />
        <Card 
          image={data[3].image}
          title={data[3].title}
          description={data[3].description}
          link="Saiba mais"
        />
      </Section>

      <Section variant="gray-secondary">
        <Product
          title="Xbox One S"
          description="O melhor sistema de jogos e entretenimento Ultra HD 4K"
          link="Saiba mais"
          image="background-2.jpg"
        />
      </Section>

      <Section variant="white">
        <Card 
          image={data[4].image}
          title={data[4].title}
          description={data[4].description}
          link="Compre"
        />
        <Card 
          image={data[5].image}
          title={data[5].title}
          description={data[5].description}
          link="Saiba mais"
        />
        <Card 
          image={data[6].image}
          title={data[6].title}
          description={data[6].description}
          link="Saiba mais"
        />
        <Card 
          image={data[7].image}
          title={data[7].title}
          description={data[7].description}
          link="Comece já"
        />
      </Section>

      <Footer />

      <GlobalStyles />
    </>
  );
}