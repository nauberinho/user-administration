import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import moment from "moment";

import { Checkbox } from "semantic-ui-react";
import { Icon } from "semantic-ui-react";
import theme from "../../shared/theme";
import mediaQueries from "../../shared/media-queries";

// Actions
import {
  updateUser,
  createUser,
  deleteUser,
  deleteUsers,
  resetState
} from "../../actions";

// Local components
import Form from "./components/Form";
import DeletePrompt from "./components/DeletePrompt";
import Pagination from "./components/Pagination";

// Shared components
import SectionContainer from "../../shared/components/SectionContainer";

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
  margin: auto;
  width: 100%;
`;

const UserPropertyTitle = styled.div`
  flex: 1;
  color: ${theme.colors.black.main};
  font-weight: 700;
`;

const UserButtonsContainer = styled.div`
  flex: 0.5;
  @media ${mediaQueries.tablet("max")} {
    width: 10%;
    padding: 1rem 0;
    .icon {
      font-size: 1rem;
    }
  }
  display: flex;
`;

const UserItem = styled.div`
  padding: 1rem 0;
  border-top: 1px solid gray;
  display: flex;
  overflow: hidden;
  flex-wrap: wrap;
  @media ${mediaQueries.tablet("max")} {
    font-size: 0.8rem;
    flex-direction: column;
  }
`;

const TableProperties = styled.div`
  padding: 1rem 0;
  overflow: hidden;
  flex-wrap: wrap;
  @media ${mediaQueries.tablet("min")} {
    display: flex;
  }
  @media ${mediaQueries.tablet("max")} {
    font-size: 0.8rem;
    display: none;
  }
`;

const EditButton = styled.button`
  outline: none;
  background: none;
  cursor: pointer;
  border: none;
`;
const UserProperty = styled.div`
  flex: 1;
  @media ${mediaQueries.tablet("max")} {
    width: 50%;
  }
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const UserPropertyLabel = styled.div`
  color: lightgray;
  font-size: 0.7rem;
  @media ${mediaQueries.tablet("min")} {
    display: none;
  }
`;

const AddButton = styled.button`
background: none
border: none;
outline: none;
padding: 1rem 1.5rem 1rem 0;
font-weight: 700;
border-radius: 5px;
cursor: pointer;
`;

const DeleteButton = styled.button`
  background: ${theme.colors.red.main};
  border: none;
  color: white;
  outline: none;
  padding: 1rem 1.5rem;
  font-weight: 700;
  border-radius: 5px;
  cursor: pointer;
`;

const AddIcon = styled(Icon)`
  color: ${theme.colors.green.main};
  cursor: pointer;
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

const Users = ({
  users,
  onUpdateUser,
  onCreateUser,
  onDeleteUser,
  onDeleteUsers,
  onResetState
}) => {
  const [isUpdatingUser, setIsUpdatingUser] = useState(false);
  const [userToUpdate, setUserToUpdate] = useState(undefined);
  const [isCreatingUser, setIsCreatingUser] = useState(false);
  const [markedUsers, setMarkedUsers] = useState([]);
  const [isDeletePromptOpen, setIsDeletePromptOpen] = useState(false);

  useEffect(() => {
    setIsUpdatingUser(false);
    setUserToUpdate(undefined);
    setIsCreatingUser(false);
    setMarkedUsers([]);
    setIsDeletePromptOpen(false);
  }, [users.successMessage]);

  return (
    <SectionContainer>
      <Form
        isOpen={isUpdatingUser || isCreatingUser}
        onCancel={
          isUpdatingUser
            ? () => {
                setIsUpdatingUser(false);
                setUserToUpdate(null);
                onResetState();
                setUserToUpdate(undefined);
              }
            : () => {
                setIsCreatingUser(false);
                onResetState();
              }
        }
        onConfirm={
          isUpdatingUser
            ? (user, userId) => {
                onUpdateUser(user, userId);
                onResetState();
                setUserToUpdate(undefined);
              }
            : onCreateUser
        }
        strings={isUpdatingUser ? strings.update : strings.create}
        userToUpdate={userToUpdate}
      />
      <DeletePrompt
        isOpen={isDeletePromptOpen}
        onDelete={() =>
          markedUsers.length > 1
            ? onDeleteUsers(markedUsers)
            : onDeleteUser(markedUsers[0])
        }
        onCancel={() => {
          setIsDeletePromptOpen(false);
          onResetState();
        }}
      />
      <Heading>
        <Title>A list of users</Title>
        <Introduction />
      </Heading>

      <Content>
        <UsersTable>
          <TableProperties>
            <UserButtonsContainer />
            <UserPropertyTitle>Name</UserPropertyTitle>
            <UserPropertyTitle>Email</UserPropertyTitle>
            <UserPropertyTitle>Date Created</UserPropertyTitle>
            <UserPropertyTitle>Date Modified</UserPropertyTitle>
          </TableProperties>
          {users.users.map(user => {
            return (
              <UserItem key={user.userid}>
                <UserButtonsContainer>
                  <Checkbox
                    onChange={() => {
                      markedUsers.includes(user.userid)
                        ? setMarkedUsers(
                            markedUsers.filter(u => u !== user.userid)
                          )
                        : setMarkedUsers([...markedUsers, user.userid]);
                    }}
                  />
                  <EditButton
                    onClick={() => {
                      setIsUpdatingUser(true);
                      setUserToUpdate(user);
                    }}
                  >
                    <Icon name="edit outline" />
                  </EditButton>
                </UserButtonsContainer>
                <UserProperty>
                  {user.namefirst} {user.namelast}{" "}
                  <UserPropertyLabel>Name</UserPropertyLabel>
                </UserProperty>
                <UserProperty>
                  {user.email}
                  <UserPropertyLabel>Email</UserPropertyLabel>
                </UserProperty>
                <UserProperty>
                  {moment.unix(user.datecreated).format("DD MMM YYYY hh:mm a")}
                  <UserPropertyLabel>Date Created</UserPropertyLabel>
                </UserProperty>
                <UserProperty>
                  {moment.unix(user.datemodified).format("DD MMM YYYY hh:mm a")}
                  <UserPropertyLabel>Last Modified</UserPropertyLabel>
                </UserProperty>
              </UserItem>
            );
          })}
          <UserItem>
            <UserButtonsContainer />
            {!markedUsers.length ? (
              <UserPropertyTitle>
                <AddButton
                  onClick={() => {
                    setUserToUpdate(undefined);
                    setIsCreatingUser(true);
                  }}
                >
                  <AddIcon name="add user" /> Add a user
                </AddButton>
              </UserPropertyTitle>
            ) : (
              <UserPropertyTitle>
                <DeleteButton onClick={() => setIsDeletePromptOpen(true)}>
                  Delete user(s)
                </DeleteButton>
              </UserPropertyTitle>
            )}
            <UserPropertyTitle />
            <UserPropertyTitle />
            <UserPropertyTitle />
          </UserItem>
        </UsersTable>
      </Content>
      <Pagination />
    </SectionContainer>
  );
};

const mapStateToProps = state => ({
  users: state.users
});

const mapDispatchToProps = dispatch => ({
  onUpdateUser: (user, userId) => dispatch(updateUser(user, userId)),
  onCreateUser: user => dispatch(createUser(user)),
  onDeleteUser: userId => dispatch(deleteUser(userId)),
  onDeleteUsers: userIds => dispatch(deleteUsers(userIds)),
  onResetState: () => dispatch(resetState())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);
