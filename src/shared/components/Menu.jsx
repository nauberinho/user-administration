import React from "react";
import { withRouter } from "react-router-dom";

import styled from "styled-components";
import { Link } from "react-router-dom";

import mediaQueries from "../media-queries";
import theme from "../theme";

import SitooLogo from ".././media/images/sitoo_logo.png";

const Container = styled.div`
  display: flex;
  @media ${mediaQueries.laptopL("min")} {
    padding: 2rem 3rem;
  }
  @media ${mediaQueries.laptopL("max")} {
    padding: 2rem 3rem;
  }
  @media ${mediaQueries.laptop("max")} {
    padding: 2rem 1rem;
  }
  @media ${mediaQueries.tablet("max")} {
    padding: 0rem 1rem 2rem;
    background: none;
    display: block;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  flex: 1;
  font-weight: bold;

  @media ${mediaQueries.tablet("min")} {
    padding: 2rem 0;
    font-size: 1.7rem;
  }
  @media ${mediaQueries.tablet("max")} {
    text-align: center;
    font-size: 1.4rem;
    padding: 1rem;
  }
`;

const Logo = styled.img`
  height: 2rem;
  display: block;
  @media ${mediaQueries.tablet("max")} {
    margin: auto;
  }
`;

const MenuWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

const StyledLink = styled(Link)`
  && {
    margin: auto 0 auto 1rem;
    @media ${mediaQueries.tablet("max")} {
      margin: auto;
    }
  }
`;

const StyledButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  color: ${theme.colors.black.main};
  font-size: 1.5rem;
  @media ${mediaQueries.tablet("max")} {
    font-size: 1.3rem;
  }
  font-weight: 550;
  background: none;
  margin: auto;
  padding: 0.9rem 0 0 0;
  transition: 0.2s ease;
  text-align: right;
  ${({ isActive }) => isActive && `color: ${theme.colors.green.main};`};
`;

const Menu = props => {
  const path = props.location.pathname.replace("/", "");
  return (
    <Container>
      <LogoWrapper>
        <Logo src={SitooLogo} />
      </LogoWrapper>
      <MenuWrapper>
        <StyledLink to="users">
          <StyledButton isActive={path === "users"}>Users</StyledButton>
        </StyledLink>
        <StyledLink to="products">
          <StyledButton isActive={path === "products"}>Products</StyledButton>
        </StyledLink>
        <StyledLink to="manufacturers">
          <StyledButton isActive={path === "manufacturers"}>
            Manufacturers
          </StyledButton>
        </StyledLink>
      </MenuWrapper>
    </Container>
  );
};

export default withRouter(Menu);
