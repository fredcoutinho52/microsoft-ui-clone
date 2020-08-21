import styled from 'styled-components';

export const Container = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Text = styled.p`
  margin: 20px 0;
`;

export const Button = styled.button`
  width: 40%;
  padding: 10px;
  border: 0;
  background-color: #000;
  color: var(--color-primary);
  font-weight: bold;
  font-size: 16px;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;