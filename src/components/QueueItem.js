import styled from "styled-components";
import Button from "./Button";
import { QueueOperationsContext } from "./AppContainer";
import { useContext } from "react";
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
  const queueOperationsCtx = useContext(QueueOperationsContext);
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
        onClick={queueOperationsCtx.cancelFromQueueHandler}
      />
      <Button
        btnName="Skip"
        display={displayBtn}
        backgroundColor="green"
        itemId={props.item.id}
        onClick={queueOperationsCtx.skipItemHandler}
      />
      <Button
        btnName="Complete"
        display={displayBtn}
        backgroundColor="green"
        itemId={props.item.id}
        onClick={queueOperationsCtx.completeFromQueueHandler}
      />
    </Item>
  );
};

export default QueueItem;

//       <Timer time={props.item.estTimeTotal} />
