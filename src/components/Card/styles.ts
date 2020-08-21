import styled from 'styled-components';

export const Container = styled.div`
  min-height: 350px;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Title = styled.h3`
  width: 90%;
  margin-top: 15px;
  margin-bottom: 5px;
`;

export const Text = styled.p`
  width: 90%;
  font-size: 14px;
`;

export const Button = styled.span`
  display: inline-block;
  color: #0067b8;
  border-bottom: 2px solid #fff;
  margin-top: 8px;
  font-weight: 500;

  &:hover {
    cursor: pointer;
    border-bottom: 2px solid #0067b8;
  }
`;