import { useEffect, useState, useRef } from "react";

const Timer = (props) => {
  let [timer, setTimer] = useState(parseInt(props.time) * 60);
  const Ref = useRef(null);
  const TimerRef = useRef(parseInt(props.time) * 60);
  // const ActionRef = useRef(props.action);
  //console.log("timer action inside timer", ActionRef.current);
  // let timeinSec = props.time * 60;

  function countDown() {
    // timer = timer - 1;
    //setTimer(timer);
    TimerRef.current = TimerRef.current - 1;
    setTimer(TimerRef.current);
  }

  useEffect(() => {
    if (props.action === "start") {
      Ref.current = setInterval(countDown, 1000);
    }

    return function cleanUp() {
      clearInterval(Ref.current);
    };
  }, [props.action]);

  if (timer <= 0) {
    clearInterval(Ref.current);
  }

  return <div>{"Timer:" + timer + ": action :" + props.action}</div>;
};

export default Timer;
