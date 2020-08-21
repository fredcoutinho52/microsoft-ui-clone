import React from 'react';

import { Container, Content, List, ListTitle, ListItem } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <Content>
        <List>
          <ListTitle>Novidades</ListTitle>
          <ListItem>Microsoft 365</ListItem>
          <ListItem>Aplicativos do Windows 10</ListItem>
        </List>

        <List>
          <ListTitle>Microsoft Store</ListTitle>
          <ListItem>Perfil da conta</ListItem>
          <ListItem>Centro de Download</ListItem>
          <ListItem>Suporte da Microsoft Store</ListItem>
          <ListItem>Devoluções</ListItem>
          <ListItem>Acompanhamento de pedidos</ListItem>
        </List>

        <List>
          <ListTitle>Educação</ListTitle>
          <ListItem>Microsoft na educação</ListItem>
          <ListItem>Office para estudantes</ListItem>
          <ListItem>Office 365 para escolas</ListItem>
          <ListItem>Microsoft Azure na Educação</ListItem>
        </List>

        <List>
          <ListTitle>Empresa</ListTitle>
          <ListItem>Azure</ListItem>
          <ListItem>AppSource</ListItem>
          <ListItem>Automotivo</ListItem>
          <ListItem>Governo</ListItem>
          <ListItem>Saúde</ListItem>
          <ListItem>Manufatura</ListItem>
          <ListItem>Serviços financeiros</ListItem>
          <ListItem>Varejo</ListItem>
        </List>

        <List>
          <ListTitle>Desenvolvedor</ListTitle>
          <ListItem>Microsoft Visual Studio</ListItem>
          <ListItem>Centro de Desenvolvimento do Windows</ListItem>
          <ListItem>Centro de Desenvolvimento</ListItem>
          <ListItem>Programa de desenvolvedores da Microsoft</ListItem>
          <ListItem>Channel 9</ListItem>
          <ListItem>Centro de Desenvolvimento do Office</ListItem>
        </List>

        <List>
          <ListTitle>Empresa</ListTitle>
          <ListItem>Carreiras</ListItem>
          <ListItem>Sobre a Microsoft</ListItem>
          <ListItem>Notícias da empresa</ListItem>
          <ListItem>Privacidade na Microsoft</ListItem>
          <ListItem>Investidores</ListItem>
          <ListItem>Diversidade e inclusão</ListItem>
          <ListItem>Segurança</ListItem>
        </List>
      </Content>
    </Container>
  );
}

export default Footer;