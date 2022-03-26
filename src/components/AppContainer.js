import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Clock from "./Clock";
import QueueForm from "./QueueForm";
import QueueItemsContainer from "./QueueItemsContainer";
import Button from "./Button";
//import Timer from "./Timer";

const Container = styled.div`
  background-color: #d3d3d3;
  margin: 5% 10%;
  padding: 5%;
`;

const AppContainer = () => {
  /*
  const items = [
    { id: "1101", name: "Naveen", tokenNo: "1" },
    { id: "1102", name: "Tharun", tokenNo: "2" },
    { id: "1103", name: "Theera", tokenNo: "3" },
  ];
*/

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

  function addToQueue(item) {
    // token generation logic should be fixed
    console.log("item", items);
    const itemListArray = items;
    //item.tokenNo = itemListArray.length + 1;
    item.tokenNo = generateToken();
    if (itemListArray.length >= 1) {
      // item.tokenNo = itemListArray[itemListArray.length - 1].tokenNo * 1 + 1;
      // the time shown here will be the sum of the time of items waiting in the queue
      item.estTimeTotal =
        item.estTime * 1 +
        itemListArray[itemListArray.length - 1].estTimeTotal * 1;
    } else {
      //item.tokenNo = 1;
      item.estTimeTotal = item.estTime;
    }
    itemListArray.push(item);
    setItems(itemListArray);
    setReload(!reload);
    console.log("items array", items);
  }

  function startTimer() {
    console.log("timer starting...");
    setTimerAction("start");
  }

  function cancelFromQueue(itemId) {
    // removes item from main queue and places inside cancelled queue
    let cancelledItemsArray = cancelledItems;
    let newItemsArray = [];
    let cancelledItem = items.filter((item) => item.id === itemId)[0];
    console.log("cancelled item", cancelledItem, "id:", itemId);
    newItemsArray = items.filter((item) => item.id !== itemId);

    cancelledItemsArray.push(cancelledItem);
    setItems(newItemsArray);
    setCancelledItems(cancelledItemsArray);
    setReload(!reload);
  }

  function completeFromQueue(itemId) {
    // removes item from main queue and places inside completed queue
    let completedItemsArray = completedItems;
    let newItemsArray = [];
    let completedItem = items.filter((item) => item.id === itemId)[0];
    console.log("completed item", completedItem, "id:", itemId);
    newItemsArray = items.filter((item) => item.id !== itemId);

    completedItemsArray.push(completedItem);
    setItems(newItemsArray);
    setCompletedItems(completedItemsArray);
    setReload(!reload);
  }

  function skipItem(itemId) {
    // skip function will rearrage position of the item in queue with one below it
    const itemIndex = items.findIndex((item) => item.id === itemId);
    console.log("item index", itemIndex);
    const newItemsArray = items;
    if (newItemsArray[itemIndex + 1].id) {
      [newItemsArray[itemIndex], newItemsArray[itemIndex + 1]] = [
        newItemsArray[itemIndex + 1],
        newItemsArray[itemIndex],
      ];
    }
    setItems(newItemsArray);
    setReload(!reload);
  }

  useEffect(() => {
    console.log("timer action passed", timerAction);
  }, [timerAction]);

  return (
    <Container>
      <Clock />
      <Button btnName="START" onClick={startTimer} />
      <QueueForm onAddToQueue={addToQueue} />
      <QueueItemsContainer
        items={items}
        reload={reload}
        queueName="Main Queue"
        onCancel={cancelFromQueue}
        onComplete={completeFromQueue}
        onSkip={skipItem}
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
