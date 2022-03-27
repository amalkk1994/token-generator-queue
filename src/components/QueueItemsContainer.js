import QueueItem from "./QueueItem";

const QueueItemsContainer = (props) => {
  const items = props.items;
  console.log("QueueItemsContainer", items, props.queueName);
  return (
    <div>
      <h1>{props.queueName}</h1>
      {items.map((item) => {
        return (
          <QueueItem
            item={item}
            key={item.tokenNo}
            queueName={props.queueName}
          />
        );
      })}
    </div>
  );
};

/*
            onCancel={props.onCancel}
            onComplete={props.onComplete}
            onSkip={props.onSkip}
*/

export default QueueItemsContainer;
