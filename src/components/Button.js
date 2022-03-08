import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 1.1rem;
  color: white;
  background-color: ${(props) => props.backgroundColor || "green"};
  padding: 0.8em;
  margin: 1em;
  display: ${(props) => props.display || "block"};
  border: none;
`;

const Button = (props) => {
  return <StyledButton display={props.display}>{props.btnName}</StyledButton>;
};

export default Button;
