import styled from "styled-components";
import Button from "./Button";
import Timer from "./Timer";

const StyledField = styled.h4`
  display: inline-block;
  margin-left: 10%;
  color: white;
`;

const Item = styled.div`
  background-color: red;
  border-radius: 10px;
  margin-bottom: 1em;
`;

const QueueItem = (props) => {
  return (
    <Item>
      <StyledField>ID: {props.item.id}</StyledField>
      <StyledField>Name: {props.item.name}</StyledField>
      <StyledField>Token No: {props.item.tokenNo}</StyledField>
      <Timer time={props.item.estTimeTotal} />
      <Button btnName="Cancel" display="inline-block" backgroundColor="green" />
      <Button btnName="Skip" display="inline-block" backgroundColor="green" />
      <Button btnName="Expand" display="inline-block" backgroundColor="green" />
    </Item>
  );
};

export default QueueItem;
