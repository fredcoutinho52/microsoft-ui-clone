import styled from 'styled-components';

export const Container = styled.div`
  width: 88%;
  margin: 0 auto 20px auto;
  min-height: 420px;
  
  &.white {
    --bg-color: var(--color-primary);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 10px;
    align-items: center;
  }

  &.gray-primary {
    --bg-color: var(--color-gray-primary);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &.gray-secondary {
    --bg-color: var(--color-gray-secondary);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  background: var(--bg-color);
`;