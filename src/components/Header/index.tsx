import React from 'react';

import { Container, Content, Logo } from './styles';

import Menu from '../Menu';

const Header: React.FC = () => {
  return (
    <Container>
      <Content>
        <Logo />

        <Menu />
      </Content>
    </Container>
  );
}

export default Header;