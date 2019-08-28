import React from "react";
import styled from "styled-components";

import SectionContainer from "../../shared/components/SectionContainer";
import mediaQueries from "../../shared/media-queries";
import theme from "../../shared/theme";

const Content = styled.div`
  @media ${mediaQueries.laptop("min")} {
    width: 50%;
  }
  margin: auto;
`;

const Heading = styled.div`
  font-size: 1.7rem;
  font-weight: bold;
  color: ${theme.colors.black.main};
`;

const Products = () => (
  <SectionContainer>
    <Content>
      <Heading>Products</Heading>
    </Content>
  </SectionContainer>
);

export default Products;
