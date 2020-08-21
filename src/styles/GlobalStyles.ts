import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, button, input {
    font-family: 'Segoe UI', sans-serif;
  }

  :root {
    --color-primary: #fff;
    --color-gray-primary: #e7e7e8;
    --color-gray-secondary: #c8c8c8;
  }
`;