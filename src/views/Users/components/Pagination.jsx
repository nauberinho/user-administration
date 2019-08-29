import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

// Actions
import { getUsers } from "../../../actions";

const PaginationButton = styled.button`
  font-weight: 700;
  color: ${({ isInactive }) => (isInactive ? "lightgreen" : "black")};
  background: ${({ isActive }) => (isActive ? "white" : "lightgray")};
`;

const Pagination = ({ users, getUsers }) => {
  useEffect(() => {
    getUsers(0);
    console.log("Getting users");
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(users, "=users");

  const paginationButtons = [];
  for (let number = 1; number <= users.numberOfUsers / 10; number++) {
    let newIndex = number * 10;
    paginationButtons.push(
      <PaginationButton
        onClick={() => {
          setCurrentIndex(newIndex);
          getUsers(currentIndex);
        }}
        disabled={currentIndex === newIndex}
        isActive={currentIndex === newIndex}
      >
        Button
      </PaginationButton>
    );
  }
  return (
    <div>
      <PaginationButton
        onClick={() => {
          setCurrentIndex(currentIndex - 10);
          getUsers(currentIndex);
        }}
        disabled={currentIndex <= 10}
        isInactive={currentIndex <= 10}
      >
        Go backwards
      </PaginationButton>
      {paginationButtons}
      <PaginationButton
        onClick={() => {
          setCurrentIndex(currentIndex + 10);
          getUsers(currentIndex);
        }}
      >
        Go forward
      </PaginationButton>
    </div>
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
