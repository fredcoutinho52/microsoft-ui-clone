import React from 'react';

import { Container } from './styles';

interface Props {
  variant: 'white' | 'gray-primary' | 'gray-secondary';
}

const Section: React.FC<Props> = ({ children, variant }) => {
  return (
    <Container className={variant}>
      {children}
    </Container>
  );
}

export default Section;