import React from "react";
import PropTypes from "react-proptypes";
import styled from "styled-components";
import mediaQueries from "../media-queries";
import { fadeIn } from "../keyframes";

const Container = styled.div`
  margin: auto;
  background: white;  
  overflow: hidden;
  word-wrap: break-word;
  animation: ${fadeIn} 0.5s ease;
  @media ${mediaQueries.laptopL("min")} {
    padding: 1rem 3rem 3rem;
  }
  @media ${mediaQueries.laptopL("max")} {
    padding: 1rem 3rem 3rem;
  }
  @media ${mediaQueries.laptop("max")} {
    padding: 1rem
  }
  @media ${mediaQueries.tablet("max")} {
    padding: 1rem
    background: none;
  }
  @media ${mediaQueries.mobileM("max")} {
    padding: 1rem
  }
  
  
`;

const SectionContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default SectionContainer;
