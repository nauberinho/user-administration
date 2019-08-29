import React, { useState, useEffect } from "react";
import _ from "lodash";

import { Input } from "semantic-ui-react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
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

const InputItem = styled.div`
  padding: 2rem 0;
  border: 2px solid black;
  width: 20rem;
`;

const InputLabel = styled.div`
  text-align: left;
  padding-bottom: 0.3rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: 1px solid green;
`;

const CancelButton = styled.button`
  outline: none;
  background: lightred;
  border: 2px solid gray;
  padding: 1.5rem;
  cursor: pointer;
`;

const ConfirmButton = styled.button`
  outline: none;
  background: lightred;
  border: 2px solid gray;
  align-self: flex-end;
  padding: 1.5rem;
  cursor: pointer;
`;

const Form = ({ isOpen, onCancel, onConfirm, userToUpdate }) => {
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    if (userToUpdate) {
      setUserFirstName(_.get(userToUpdate, "namefirst", ""));
      setUserLastName(_.get(userToUpdate, "namelast", ""));
      setUserEmail(_.get(userToUpdate, "email", ""));
    }
  }, [userToUpdate]);

  if (!isOpen) {
    return null;
  }

  const userToConfirm = _.assign({}, userToUpdate, {
    namefirst: userFirstName,
    namelast: userLastName,
    email: userEmail
  });

  return (
    <Container>
      <FormWrapper>
        <InputItem>
          <InputLabel>First Name</InputLabel>
          <Input
            type="text"
            placeholder="Search..."
            value={userFirstName}
            onChange={e => {
              setUserFirstName(e.target.value);
            }}
          />
        </InputItem>
        <InputItem>
          <InputLabel>Last Name</InputLabel>
          <Input
            type="text"
            placeholder="Search..."
            value={userLastName}
            onChange={e => {
              setUserLastName(e.target.value);
            }}
          />
        </InputItem>
        <InputItem>
          <InputLabel>Email</InputLabel>
          <Input
            type="text"
            placeholder="Search..."
            value={userEmail}
            onChange={e => {
              setUserEmail(e.target.value);
            }}
          />
        </InputItem>
        <ButtonWrapper>
          <CancelButton onClick={onCancel}>Cancel</CancelButton>
          <ConfirmButton onClick={() => onConfirm(userToConfirm)}>
            Confirm
          </ConfirmButton>
        </ButtonWrapper>
      </FormWrapper>
    </Container>
  );
};

export default Form;
