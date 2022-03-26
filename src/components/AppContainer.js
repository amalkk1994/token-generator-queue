import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Clock from "./Clock";
import QueueForm from "./QueueForm";
import QueueItemsContainer from "./QueueItemsContainer";
import Button from "./Button";
import {
  addToQueue,
  cancelFromQueue,
  completeFromQueue,
  skipItem,
} from "../utils/queueOperations";
//import Timer from "./Timer";

const Container = styled.div`
  background-color: #d3d3d3;
  margin: 5% 10%;
  padding: 5%;
`;

const AppContainer = () => {
  const [items, setItems] = useState([]);
  const [cancelledItems, setCancelledItems] = useState([]);
  const [completedItems, setCompletedItems] = useState([]);
  const [reload, setReload] = useState(0);
  let [timerAction, setTimerAction] = useState("stop");
  let newTokenRef = useRef(0);

  function generateToken() {
    newTokenRef.current = newTokenRef.current * 1 + 1;
    return newTokenRef.current;
  }

  function addToQueueHandler(item) {
    item.tokenNo = generateToken();
    console.log(addToQueue);
    const itemListArray = addToQueue(item, items);
    setItems(itemListArray);
    setReload(!reload);
    console.log("items array", items);
  }

  function startTimer() {
    console.log("timer starting...");
    setTimerAction("start");
  }

  function cancelFromQueueHandler(itemId) {
    // removes item from main queue and places inside cancelled queue
    const queues = cancelFromQueue(itemId, items, cancelledItems);
    setItems(queues.mainQueue);
    setCancelledItems(queues.cancelQueue);
    setReload(!reload);
  }

  function completeFromQueueHandler(itemId) {
    // removes item from main queue and places inside completed queue
    const queues = completeFromQueue(itemId, items, completedItems);
    setItems(queues.mainQueue);
    setCompletedItems(queues.completeQueue);
    setReload(!reload);
  }

  function skipItemHandler(itemId) {
    // skip function will rearrage position of the item in queue with one below it
    setItems(skipItem(itemId, items));
    setReload(!reload);
  }

  useEffect(() => {
    console.log("timer action passed", timerAction);
  }, [timerAction]);

  return (
    <Container>
      <Clock />
      <Button btnName="START" onClick={startTimer} />
      <QueueForm onAddToQueue={addToQueueHandler} />
      <QueueItemsContainer
        items={items}
        reload={reload}
        queueName="Main Queue"
        onCancel={cancelFromQueueHandler}
        onComplete={completeFromQueueHandler}
        onSkip={skipItemHandler}
      />
      <QueueItemsContainer
        items={cancelledItems}
        reload={reload}
        queueName="Cancel Queue"
      />
      <QueueItemsContainer
        items={completedItems}
        reload={reload}
        queueName="Completed Queue"
      />
    </Container>
  );
};

export default AppContainer;

//       <Timer time="1" action={timerAction} />
