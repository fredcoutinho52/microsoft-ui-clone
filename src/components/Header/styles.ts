import styled from 'styled-components';

import logo from '../../assets/images/logo.png';

export const Container = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  width: 88%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const Logo = styled.div`
  width: 140px;
  height: 25px;
  margin-right: 12px;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: contain;

  &:hover {
    cursor: pointer;
  }
`;