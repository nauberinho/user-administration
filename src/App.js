import React from "react";

import styled from "styled-components";

import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

// Components
import Menu from "./shared/components/Menu";

// Views
import Users from "./views/Users";
import Manufacturers from "./views/Manufacturers";
import Products from "./views/Products";

import mediaQueries from "./shared/media-queries";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  min-height: 100vh;
  background: rgba(255, 255, 255, 1);
  background: -moz-linear-gradient(
    top,
    rgba(255, 255, 255, 1) 0%,
    rgba(246, 246, 246, 1) 47%,
    rgba(237, 237, 237, 1) 72%,
    rgba(237, 237, 237, 1) 100%
  );
  background: -webkit-gradient(
    left top,
    left bottom,
    color-stop(0%, rgba(255, 255, 255, 1)),
    color-stop(30%, rgba(255, 255, 255, 1)),
    color-stop(47%, rgba(246, 246, 246, 1)),
    color-stop(72%, rgba(237, 237, 237, 1)),
    color-stop(100%, rgba(237, 237, 237, 1))
  );
  background: -webkit-linear-gradient(
    top,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 30%,
    rgba(246, 246, 246, 1) 47%,
    rgba(237, 237, 237, 1) 72%,
    rgba(237, 237, 237, 1) 100%
  );
  background: -o-linear-gradient(
    top,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 30%,
    rgba(246, 246, 246, 1) 47%,
    rgba(237, 237, 237, 1) 72%,
    rgba(237, 237, 237, 1) 100%
  );
  background: -ms-linear-gradient(
    top,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 30%,
    rgba(246, 246, 246, 1) 47%,
    rgba(237, 237, 237, 1) 72%,
    rgba(237, 237, 237, 1) 100%
  );
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 30%,
    rgba(246, 246, 246, 1) 47%,
    rgba(237, 237, 237, 1) 72%,
    rgba(237, 237, 237, 1) 100%
  );
  a {
    text-decoration: none;
  }
  @media ${mediaQueries.desktop("min")} {
    padding: 0rem 35rem;
  }
  @media ${mediaQueries.laptopL("min")} {
    padding: 0rem 30rem;
  }
  @media ${mediaQueries.laptopL("max")} {
    padding: 0rem 10rem;
  }
  @media ${mediaQueries.laptop("max")} {
    padding: 0rem 2rem;
  }
  @media ${mediaQueries.tablet("max")} {
    padding: 0rem;
  }
`;

const App = () => (
  <Container>
    <Router>
      <Menu />
      <Route exact path="/" component={() => <Redirect to="/users" />} />
      <Route exact path="/users" component={Users} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/manufacturers" component={Manufacturers} />
    </Router>
  </Container>
);

export default App;
