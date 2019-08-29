import React from "react";
import styled from "styled-components";
import theme from "../theme";

const Message = styled.div`
  color: ${theme.colors.red.main};
`;

const ErrorMessage = ({ errorMessage }) => <Message>{errorMessage}</Message>;

export default ErrorMessage;
