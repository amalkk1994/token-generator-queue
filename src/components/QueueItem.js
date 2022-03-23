import styled from "styled-components";
import Button from "./Button";
//import Timer from "./Timer";

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
  const displayBtn = props.queueName === "Main Queue" ? "inline-block" : "none";
  return (
    <Item>
      <StyledField>ID: {props.item.id}</StyledField>
      <StyledField>Name: {props.item.name}</StyledField>
      <StyledField>Token No: {props.item.tokenNo}</StyledField>
      <Button
        btnName="Cancel"
        display={displayBtn}
        backgroundColor="green"
        itemId={props.item.id}
        onClick={props.onCancel}
      />
      <Button
        btnName="Skip"
        display={displayBtn}
        backgroundColor="green"
        itemId={props.item.id}
      />
      <Button
        btnName="Complete"
        display={displayBtn}
        backgroundColor="green"
        itemId={props.item.id}
      />
    </Item>
  );
};

export default QueueItem;

//       <Timer time={props.item.estTimeTotal} />
