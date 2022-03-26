export const addToQueue = (item, mainQueue) => {
  // token generation logic should be fixed
  console.log("item", mainQueue);
  const itemListArray = mainQueue;
  //item.tokenNo = itemListArray.length + 1;
  // item.tokenNo = generateToken();
  if (itemListArray.length >= 1) {
    // item.tokenNo = itemListArray[itemListArray.length - 1].tokenNo * 1 + 1;
    // the time shown here will be the sum of the time of items waiting in the queue
    item.estTimeTotal =
      item.estTime * 1 +
      itemListArray[itemListArray.length - 1].estTimeTotal * 1;
  } else {
    item.estTimeTotal = item.estTime;
  }
  itemListArray.push(item);
  console.log("items array", itemListArray);
  return itemListArray;
};

export const cancelFromQueue = (itemId, mainQueue, cancelQueue) => {
  // removes item from main queue and places inside cancelled queue
  let cancelledItemsArray = cancelQueue;
  let newItemsArray = [];
  let cancelledItem = mainQueue.filter((item) => item.id === itemId)[0];
  console.log("cancelled item", cancelledItem, "id:", itemId);
  newItemsArray = mainQueue.filter((item) => item.id !== itemId);

  cancelledItemsArray.push(cancelledItem);
  return {
    cancelQueue: cancelledItemsArray,
    mainQueue: newItemsArray,
  };
};

export const completeFromQueue = (itemId, mainQueue, completeQueue) => {
  // removes item from main queue and places inside completed queue
  let completedItemsArray = completeQueue;
  let newItemsArray = [];
  let completedItem = mainQueue.filter((item) => item.id === itemId)[0];
  console.log("completed item", completedItem, "id:", itemId);
  newItemsArray = mainQueue.filter((item) => item.id !== itemId);

  completedItemsArray.push(completedItem);

  return {
    mainQueue: newItemsArray,
    completeQueue: completedItemsArray,
  };
};

export const skipItem = (itemId, mainQueue) => {
  // skip function will rearrage position of the item in queue with one below it
  const itemIndex = mainQueue.findIndex((item) => item.id === itemId);
  console.log("item index", itemIndex);
  const newItemsArray = mainQueue;
  if (newItemsArray[itemIndex + 1].id) {
    [newItemsArray[itemIndex], newItemsArray[itemIndex + 1]] = [
      newItemsArray[itemIndex + 1],
      newItemsArray[itemIndex],
    ];
  }

  return newItemsArray;
};
