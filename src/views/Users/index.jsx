import React, { useEffect, useState } from "react";
import PropTypes from "react-proptypes";
import styled from "styled-components";
import { connect } from "react-redux";
import moment from "moment";

import Avatar from "@material-ui/core/Avatar";
import theme from "../../shared/theme";
import mediaQueries from "../../shared/media-queries";

// Actions
import { getUsers, updateUser, createUser } from "../../actions";

// Local components
import Form from "./components/Form";

// Shared components
import SectionContainer from "../../shared/components/SectionContainer";
import { string } from "postcss-selector-parser";

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

const UsersTable = styled.div`
  border: 2px solid orange;
  margin: auto;
  width: 100%;
`;

const UserPropertyTitle = styled.div`
  flex: 1;
  color: ${theme.colors.black.main};
  font-weight: 700;
`;

const UserItem = styled.div`
  padding: 1rem 0;
  border: 1px solid gray;
  display: flex;
`;

const UserProperty = styled.div`
  flex: 1;
`;

const strings = {
  update: {
    title: "Edit user",
    cancelButton: "Cancel",
    confirmButton: "Save edit"
  },
  create: {
    title: "Create user",
    cancelButton: "Cancel",
    confirmButton: "Create user"
  }
};

const Users = ({ getUsers, users, updateUser, createUser }) => {
  useEffect(() => getUsers(), []);
  const [isEditingUser, setIsEditingUser] = useState(false);
  const [userToUpdate, setUserToUpdate] = useState(null);
  const [isCreatingUser, setIsCreatingUser] = useState(false);

  return (
    <SectionContainer>
      <Form
        isOpen={isEditingUser || isCreatingUser}
        onCancel={
          isEditingUser
            ? () => {
                setIsEditingUser(false);
                setUserToUpdate(null);
              }
            : () => setIsCreatingUser(false)
        }
        onConfirm={isEditingUser ? updateUser : createUser}
        strings={isEditingUser ? strings.update : strings.create}
        userToUpdate={userToUpdate}
      />
      <Heading>
        <Title>A list of users</Title>
        <Introduction />
      </Heading>

      <Content>
        <UsersTable>
          <UserItem>
            <UserPropertyTitle>Name</UserPropertyTitle>
            <UserPropertyTitle>Email</UserPropertyTitle>
            <UserPropertyTitle>Date Created</UserPropertyTitle>
            <UserPropertyTitle>Date Modified</UserPropertyTitle>
          </UserItem>
          {users.users.map((user, key) => {
            const date = new Date(user.datecreated * 1000);
            return (
              <UserItem>
                <UserProperty>
                  {user.namefirst} {user.namelast}{" "}
                </UserProperty>
                <UserProperty>{user.email}</UserProperty>
                <UserProperty>
                  {moment.unix(user.datecreated).format("DD MMM YYYY hh:mm a")}
                </UserProperty>
                <UserProperty>
                  {moment.unix(user.datemodified).format("DD MMM YYYY hh:mm a")}
                </UserProperty>
                <UserProperty
                  onClick={() => {
                    setIsEditingUser(true);
                    setUserToUpdate(user);
                  }}
                >
                  Update user
                </UserProperty>
              </UserItem>
            );
          })}
          <UserItem>
            <UserPropertyTitle onClick={() => setIsCreatingUser(true)}>
              Create user
            </UserPropertyTitle>
          </UserItem>
        </UsersTable>
      </Content>
      <Form />
    </SectionContainer>
  );
};

Users.propTypes = {
  getUsers: PropTypes.func
};

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers()),
  updateUser: user => dispatch(updateUser(user)),
  createUser: user => dispatch(createUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
