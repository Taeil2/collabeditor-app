import styled from "styled-components";
import { grays } from "./styles";

const GlobalStyles = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap');

  main {
    font-family: "Noto Sans";
    color: ${grays.gray8};
    max-width: 1000px;
    margin: 0 auto;
    padding: 50px 0;
    font-size: 14px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  h1 {
    font-family: "Open Sans";
    font-weight: 400;
    font-size: 48px;
  }

  h2 {
    font-family: "Open Sans";
    font-weight: 500;
    font-size: 40px;
  
  }

  h3 {
    font-family: "Open Sans";
    font-weight: 400;
    font-size: 32px;
    margin-bottom: 10px;
  }

  h4 {
    font-family: "Open Sans";
    font-weight: 400;
    font-size: 24px;
  }

  h5 {
    font-family: "Open Sans";
    font-weight: 400;
    font-size: 20px;
  }
  
  h6 {
    font-family: "Open Sans";
    font-weight: 500;
    font-size: 14px;
    color: #5C7EFF;
  }

  p {
    line-height: 1.4em;
  }
`;

export default GlobalStyles