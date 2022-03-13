import { useEffect, useState, useRef } from "react";

const Timer = (props) => {
  let [timer, setTimer] = useState(0);
  const Ref = useRef(null);
  const TimerRef = useRef(parseInt(props.time) * 60);
  // let timeinSec = props.time * 60;

  function countDown() {
    // timer = timer - 1;
    //setTimer(timer);
    TimerRef.current = TimerRef.current - 1;
    setTimer(TimerRef.current);
  }

  useEffect(() => {
    Ref.current = setInterval(countDown, 1000);

    return function cleanUp() {
      clearInterval(Ref.current);
    };
  }, []);

  if (timer <= 0) {
    clearInterval(Ref.current);
  }

  return <div>{"Timer:" + timer}</div>;
};

export default Timer;
