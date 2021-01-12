import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
  *{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

body {
  background: linear-gradient(90deg, hsla(49, 91%, 78%, 1) 0%, hsla(6, 100%, 50%, 1) 100%);
  color: #000;
  -webkit-font-smoothing: antialiased;
}

body, input, button {
  font-family: 'Josefin Sans', sans-serif;
  font-size: 1em;
}

h1, h2, h3, h4, h5, h6, strong {
  font-weight: 600;
}
button {
  cursor: pointer;
}
}
`;
