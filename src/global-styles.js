import { injectGlobal } from 'styled-components';

/** ************************************************************************* */

injectGlobal`
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");

  :root {
    --primary-color: #330000;
    --primary-accent-color: #008ac3;

    --background-color: #A22522;

    --heading: #B399A2;

    --black: #333333;

    --font-size: 10pt;
  }

  #app {
    min-height: 100%;
    height: 100%;
    font-family: Lato, sans-serif;
    font-size: var(--font-size);
  }

  a {
    color: var(--black);
    &:hover { color: var(--primary-accent-color); }

    &.active {
      color: var(--primary-color);
      cursor: default;
    }
  }

  h1 {
    font-weight: 500;
  }
`;
