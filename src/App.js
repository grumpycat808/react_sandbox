import React, { useEffect, useState } from "react";
import { getData } from "./getData";
export default function App(props) {
  const [messages, setMessages] = useState([]);
  // const makeRequest = () => {
  //   getData().then((response) => setMessages(response.data));
  // };
  // useEffect(() => {
  //   makeRequest();
  // }, []);

  let i = 1;

  function incrementBy(value) {
    i += value;
    return i;
  }

  function once(func) {
    let invoked = false;

    return func;
  }

  const incrementByOnce = once(incrementBy);
  let one = incrementByOnce(2);
  let two = incrementByOnce(3);
  console.log("one", one);
  console.log("two", two);
  return (
    <div className="App">
      <h1>Test</h1>
    </div>
  );
}
