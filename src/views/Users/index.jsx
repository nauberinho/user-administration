import React, { useEffect } from "react";
import PropTypes from "react-proptypes";
import styled from "styled-components";
import { connect } from "react-redux";

import SectionContainer from "../../shared/components/SectionContainer";
import Avatar from "@material-ui/core/Avatar";
import theme from "../../shared/theme";
import mediaQueries from "../../shared/media-queries";

import { getUsers } from "../../actions";

const Content = styled.div`
  @media ${mediaQueries.laptop("min")} {
    display: flex;
    padding: 0 5rem;
  }
  @media ${mediaQueries.tablet("min")} {
    display: flex;
    padding: 2rem 0;
  }
  @media ${mediaQueries.laptop("max")} {
    padding: 0;
  }
`;

const Heading = styled.div`
  @media ${mediaQueries.laptop("min")} {
    padding: 0 5rem;
  }
  @media ${mediaQueries.tablet("min")} {
    padding: 0;
  }
  @media ${mediaQueries.laptop("max")} {
    padding: 0;
  }
  color: ${theme.colors.black.main};
`;

const Title = styled.div`
  font-size: 1.7rem;
  font-weight: bold;
`;

const Introduction = styled.div`
  padding: 1rem 0;
  font-size: 1.3rem;
`;

const Users = ({ getUsers }) => {
  useEffect(() => getUsers(), []);
  return (
    <SectionContainer>
      <Heading>
        <Title>A list of users</Title>
        <Introduction />
      </Heading>

      <Content>User content</Content>
    </SectionContainer>
  );
};

Users.propTypes = {
  getUsers: PropTypes.func
};

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers())
});

export default connect(
  null,
  mapDispatchToProps
)(Users);
