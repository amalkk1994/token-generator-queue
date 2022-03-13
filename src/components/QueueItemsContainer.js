import QueueItem from "./QueueItem";

const QueueItemsContainer = (props) => {
  const items = props.items;
  console.log("QueueItemsContainer", items);
  return (
    <div>
      {items.map((item) => {
        return <QueueItem item={item} key={item.tokenNo} />;
      })}
    </div>
  );
};

export default QueueItemsContainer;
