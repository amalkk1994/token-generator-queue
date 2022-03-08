import styled from "styled-components";
import { useRef } from "react";
import Button from "./Button";

const FormStyled = styled.form`
  font-size: 1.1rem;
  background-color: #98afc7;
  padding: 0.8em;
  width: 30%;
  margin: 0.8em;
`;

const StyledInput = styled.input`
  display: block;
  width: 80%;
`;

const StyledLabel = styled.label`
  display: block;
  width: 80%;
`;

const QueueForm = (props) => {
  const idInputRef = useRef();
  const nameInputRef = useRef();
  const estTimeRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredId = idInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const enteredEstTime = estTimeRef.current.value;

    const formItem = {
      id: enteredId,
      name: enteredName,
      estTime: enteredEstTime,
      tokenNo: "",
    };

    console.log(formItem);
    props.onAddToQueue(formItem);
  };
  return (
    <FormStyled onSubmit={submitHandler}>
      <StyledLabel htmlFor="idNum">ID</StyledLabel>
      <StyledInput type="text" required id="idNum" ref={idInputRef} />
      <StyledLabel htmlFor="name">Name</StyledLabel>
      <StyledInput type="text" required id="name" ref={nameInputRef} />
      <StyledLabel htmlFor="estTime">Estimated Time in mts</StyledLabel>
      <StyledInput type="number" required id="estTime" ref={estTimeRef} />
      <Button btnName="Add To Queue" />
    </FormStyled>
  );
};

export default QueueForm;
