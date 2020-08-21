import React from 'react';

import { Container, Content, Text, Button } from './styles';

interface Props {
  title: string;
  description: string;
  link: string;
  image: string;
}

const Product: React.FC<Props> = ({ title, description, link, image }) => {
  return (
    <Container>
      <Content>
        <h2>{title}</h2>
        <Text>{description}</Text>
        <Button>{link}</Button>
      </Content>

      <img src={require(`../../assets/images/${image}`)} alt="Background" />
    </Container>
  );
}

export default Product;