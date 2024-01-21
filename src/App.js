import React, { useEffect, useState } from "react";
import { getData } from "./getData";
export default function App(props) {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    getData().then((response) => setMessages(response.data));
    console.log("messages", messages);
  }, []);
  return (
    <div className="App">
      <h1>Test</h1>
      {messages && messages.length > 0 && <p>{messages[0].name}</p>}
    </div>
  );
}
