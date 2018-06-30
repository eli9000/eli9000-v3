import { injectGlobal } from 'styled-components';

/* ***************************************************************** */

/* ______TODO______
  1. Create vars for the following:
    --primary-text
    --secondary-text
    --primary-bg
    --secondary-bg
    --surface     uderlying background color

*/

injectGlobal`
  @import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");

  :root {

    --primary-color: #330000;
    --primary-accent-color: #008ac3;

    --background-color: #A22522;
    background-color: #a22522;

    --heading: #B399A2;

    --black: #333333;

    --font-size: 12pt;
  }

  #app {
    min-height: 100%;
    height: 100%;
    font-family: "robotoregular", Lato, sans-serif;
    font-size: var(--font-size);
  }

  a {
    cursor: pointer;
  }

  a:link a:visited {
    color: var(--black);
    text-decoration: none;
  }

  h1 {
    margin: 10px;
    padding-top: 10px;
    font-family: "robotoblack";
    font-weight: 500;
    text-align: center;
  }

  p {
    font-family: "robotoregular";
  }
`;
