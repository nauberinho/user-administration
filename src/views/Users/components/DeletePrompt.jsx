import React from "react";
import { connect } from "react-redux";

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

const PromptWrapper = styled.div`
  margin: auto;
  background: white;
  padding: 2rem;
  width: auto;
  height: auto;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  padding: 1rem 0;
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

const DeletePrompt = ({ users, isOpen, onCancel, onDelete }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Container>
      <PromptWrapper>
        Are you sure you want to delete?
        <ButtonWrapper>
          <CancelWrapper>
            <CancelButton onClick={onCancel}>Cancel</CancelButton>
          </CancelWrapper>
          <ConfirmWrapper>
            <ConfirmButton onClick={onDelete}>
              {users.isLoading ? "Loading..." : "Confirm"}
            </ConfirmButton>
          </ConfirmWrapper>
        </ButtonWrapper>
        {users.errorMessage && (
          <ErrorMessage errorMessage={users.errorMessage} />
        )}
      </PromptWrapper>
    </Container>
  );
};

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps)(DeletePrompt);
