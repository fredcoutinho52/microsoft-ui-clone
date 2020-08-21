import styled from 'styled-components';
import { FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const List = styled.div`
  display: flex;
  justify-content: center;
`;

export const ListItem = styled.div`
  font-size: 13px;
  margin-right: 20px;
  border-bottom: 2px solid #fff;

  &:hover {
    cursor: pointer;
    border-bottom: 2px solid #000;
  }
`;

export const Search = styled.div`
  width: 250px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SearchIcon = styled(FiSearch)`
  width: 20px;
  height: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export const CartIcon = styled(FiShoppingCart)`
  width: 20px;
  height: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export const UserIcon = styled(FiUser)`
  width: 20px;
  height: 20px;

  &:hover {
    cursor: pointer;
  }
`;