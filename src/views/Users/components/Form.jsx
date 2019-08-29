import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import _ from "lodash";

import { Input } from "semantic-ui-react";
import styled from "styled-components";
import theme from "../../../shared/theme";

// Shared components
import ErrorMessage from "../../../shared/components/ErrorMessage";

const Container = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
`;

const FormWrapper = styled.div`
  margin: auto;
  background: white;
  padding: 2rem;
  width: auto;
  height: auto;
`;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
`;

const InputItem = styled.div`
  padding: 2rem 0;
  width: 20rem;
`;

const InputLabel = styled.div`
  text-align: left;
  padding-bottom: 0.3rem;
`;

const StyledInput = styled(Input)`
  width: 100%;
`;

const FormButtons = styled.div`
  display: flex;
  flex-direction: row;
`;

const CancelWrapper = styled.div`
  flex: 1;
`;

const CancelButton = styled.button`
  outline: none;
  background: lightred;
  border: 2px solid gray;
  padding: 1.5rem;
  cursor: pointer;
`;

const ConfirmWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`;

const ConfirmButton = styled.button`
  outline: none;
  background: lightred;
  border: 2px solid white;
  align-self: flex-end;
  padding: 1.5rem;
  cursor: pointer;
  background: ${theme.colors.green.main}
  color: white;
`;

const Form = ({
  users,
  isOpen,
  onCancel,
  onConfirm,
  userToUpdate,
  strings
}) => {
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    setUserFirstName(_.get(userToUpdate, "namefirst", ""));
    setUserLastName(_.get(userToUpdate, "namelast", ""));
    setUserEmail(_.get(userToUpdate, "email", ""));
  }, [userToUpdate]);

  if (!isOpen) {
    return null;
  }

  const userToConfirm = {
    namefirst: userFirstName,
    namelast: userLastName,
    email: userEmail
  };

  return (
    <Container>
      <FormWrapper>
        <Title>{strings.title}</Title>
        <InputItem>
          <InputLabel>First Name</InputLabel>
          <StyledInput
            type="text"
            placeholder="E.g. John"
            value={userFirstName}
            onChange={e => {
              setUserFirstName(e.target.value);
            }}
          />
        </InputItem>
        <InputItem>
          <InputLabel>Last Name</InputLabel>
          <StyledInput
            type="text"
            placeholder="E.g. Doe"
            value={userLastName}
            onChange={e => {
              setUserLastName(e.target.value);
            }}
          />
        </InputItem>
        <InputItem>
          <InputLabel>Email</InputLabel>
          <StyledInput
            type="text"
            placeholder="E.g. john.doe@hotmail.com"
            value={userEmail}
            onChange={e => {
              setUserEmail(e.target.value);
            }}
          />
        </InputItem>
        <FormButtons>
          <CancelWrapper>
            <CancelButton onClick={onCancel}>
              {strings.cancelButton}
            </CancelButton>
          </CancelWrapper>
          <ConfirmWrapper>
            <ConfirmButton
              onClick={() =>
                onConfirm(userToConfirm, _.get(userToUpdate, "userid"))
              }
            >
              {users.isLoading ? "Loading..." : strings.confirmButton}
            </ConfirmButton>
          </ConfirmWrapper>
        </FormButtons>
        {users.errorMessage && (
          <ErrorMessage errorMessage={users.errorMessage} />
        )}
      </FormWrapper>
    </Container>
  );
};

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps)(Form);
