import { useState, useEffect } from "react";
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
  const [reload, setReload] = useState();
  let [timerAction, setTimerAction] = useState("stop");

  function addToQueue(item) {
    console.log("item", items);
    const itemListArray = items;
    //item.tokenNo = itemListArray.length + 1;
    if (itemListArray.length >= 1) {
      item.tokenNo = itemListArray[itemListArray.length - 1].tokenNo * 1 + 1;
      // the time shown here will be the sum of the time of items waiting in the queue
      item.estTimeTotal =
        item.estTime * 1 +
        itemListArray[itemListArray.length - 1].estTimeTotal * 1;
    } else {
      item.tokenNo = 1;
      item.estTimeTotal = item.estTime;
    }
    itemListArray.push(item);
    setItems(itemListArray);
    setReload(item);
    console.log("items array", items);
  }

  function startTimer() {
    console.log("timer starting...");
    setTimerAction("start");
  }

  function cancelFromQueue(itemId) {
    let cancelledItemsArray = cancelledItems;
    let newItemsArray = [];
    let cancelledItem = items.filter((item) => item.id === itemId)[0];
    console.log("cancelled item", cancelledItem, "id:", itemId);
    newItemsArray = items.filter((item) => item.id !== itemId);

    cancelledItemsArray.push(cancelledItem);
    setItems(newItemsArray);
    setCancelledItems(cancelledItemsArray);
    setReload(cancelledItem);
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
      />
      <QueueItemsContainer
        items={cancelledItems}
        reload={reload}
        queueName="Cancel Queue"
        onCancel={cancelFromQueue}
      />
    </Container>
  );
};

export default AppContainer;

//       <Timer time="1" action={timerAction} />
