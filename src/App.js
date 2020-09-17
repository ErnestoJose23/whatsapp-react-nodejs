import React, { useEffect, useState } from "react";

import "./App.css";
import SideBar from "./SideBar";
import Chat from "./Chat";
import Pusher from "pusher-js";
import axios from "./axios";

function App() {
  const [messages, setMessages] = useState([]);
  const [chatroom, setChatroom] = useState("1");
  const [chatrooms, setChatrooms] = useState([]);

  useEffect(() => {
    axios.get(`/messages/${chatroom}`).then((response) => {
      setMessages(response.data);
    });
    axios.get("chatrooms/sync").then((response) => {
      setChatrooms(response.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher("818f4bae4e80379dd079", {
      cluster: "eu",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (newMessage) => {
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  console.log(messages);

  return (
    <div className="App">
      <div className="app_body">
        <SideBar setChatroom={setChatroom} chatrooms={chatrooms} />
        <Chat messages={messages} />
      </div>
    </div>
  );
}

export default App;
