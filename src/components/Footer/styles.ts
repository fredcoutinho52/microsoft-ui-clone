import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 350px;
  padding-top: 30px;
  background-color: #ddd;
`;

export const Content = styled.div`
  width: 90%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  justify-items: center;
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ListTitle = styled.h3`
  font-size: 14px;
  color: #555;
  margin-bottom: 10px;
`;

export const ListItem = styled.a`
  width: 95%;
  font-size: 12px;
  color: #555;
  margin-bottom: 15px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;