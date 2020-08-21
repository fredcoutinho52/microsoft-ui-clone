import React from 'react';

import { Container, List, ListItem, Search, SearchIcon, CartIcon, UserIcon } from './styles';

const Menu: React.FC = () => {
  return (
    <Container>
      <List>
        <ListItem>Microsoft 365</ListItem>
        <ListItem>Office</ListItem>
        <ListItem>Windows</ListItem>
        <ListItem>Xbox</ListItem>
        <ListItem>Suporte</ListItem>
      </List>

      <Search>
        <ListItem>Toda a Microsoft</ListItem>
        
        <SearchIcon />
        <CartIcon />
        <UserIcon />
      </Search>
    </Container>
  );
}

export default Menu;