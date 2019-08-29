import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

// Actions
import { getUsers } from "../../../actions";

import { Icon } from "semantic-ui-react";

const PaginationWrapper = styled.div`
  width: auto;
  margin: auto;
`;

const PaginationContainer = styled.div`
  display: flex;
`;

const PaginationButton = styled.button`
  font-weight: 700;

  ${({ isActive }) => (isActive ? "color: lightgreen;" : "color: black")};
  ${({ isInactive }) =>
    isInactive && "color: lightgray; background: lightgray;"};
  cursor: pointer;
  padding: 1rem;
  background: none;
  outline: none;
`;

const Pagination = ({ users, getUsers }) => {
  useEffect(() => {
    getUsers(0);
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const paginationButtons = [];
  const { numberOfUsers } = users;
  for (let number = 0; number <= numberOfUsers / 10; number++) {
    let newIndex = number * 10;
    paginationButtons.push(
      <PaginationButton
        onClick={() => {
          setCurrentIndex(newIndex);
          getUsers(newIndex);
        }}
        disabled={currentIndex === newIndex}
        isActive={currentIndex === newIndex}
        key={newIndex}
      >
        {number + 1}
      </PaginationButton>
    );
  }
  return (
    <PaginationContainer>
      <PaginationWrapper>
        <PaginationButton
          onClick={() => {
            setCurrentIndex(currentIndex - 10);
            getUsers(currentIndex - 10);
          }}
          disabled={currentIndex === 0}
          isInactive={currentIndex === 0}
        >
          <Icon name="angle left" />
        </PaginationButton>
        {paginationButtons}
        <PaginationButton
          onClick={() => {
            setCurrentIndex(currentIndex + 10);
            getUsers(currentIndex + 10);
          }}
          disabled={currentIndex + 10 > numberOfUsers}
          isInactive={currentIndex + 10 > numberOfUsers}
        >
          <Icon name="angle right" />
        </PaginationButton>
      </PaginationWrapper>
    </PaginationContainer>
  );
};

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  getUsers: index => dispatch(getUsers(index))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pagination);
