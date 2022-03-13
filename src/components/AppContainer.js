import { useState } from "react";
import styled from "styled-components";
import Clock from "./Clock";
import QueueForm from "./QueueForm";
import QueueItemsContainer from "./QueueItemsContainer";

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
  const [reload, setReload] = useState();

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

  return (
    <Container>
      <Clock />
      <QueueForm onAddToQueue={addToQueue} />
      <QueueItemsContainer items={items} reload={reload} />
    </Container>
  );
};

export default AppContainer;
