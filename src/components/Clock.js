import { useState, useEffect } from "react";
import styled from "styled-components";

const DigitalClock = styled.div`
  font-size: 1.5rem;
  background-color: #343434;
  color: white;
  display: inline-block;
  padding: 1em;
  margin: 1em;
  border-radius: 5%;
`;

const Clock = () => {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }

  // const currentDateTime = new Date();
  // const timeText = currentDateTime.toLocaleTimeString();

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanUp() {
      clearInterval(timerId);
    };
  }, []);

  return <DigitalClock>{date.toLocaleTimeString()}</DigitalClock>;
};

export default Clock;
