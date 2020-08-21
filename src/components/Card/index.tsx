import React from 'react';

import { Container, Image, Title, Text, Button } from './styles';

interface Props {
  image: string;
  title: string;
  description: string;
  link: string;
}

const Card: React.FC<Props> = ({ image, title, description, link }) => {
  return (
    <Container>
      <Image src={require(`../../assets/images/${image}`)} alt="Imagem" />
      
      <Title>{title}</Title>
      <Text>{description}</Text>

      <Button>{link}</Button>
    </Container>
  );
}

export default Card;