import React, { useEffect } from "react";

import "./App.css";
import SideBar from "./SideBar";
import Chat from "./Chat";
import Pusher from "pusher-js";

function App() {
  useEffect(() => {
    const pusher = new Pusher("818f4bae4e80379dd079", {
      cluster: "eu",
    });

    const channel = pusher.subscribe("messages");
    channel.bind("inserted", (data) => {
      alert(JSON.stringify(data));
    });
  }, []);

  return (
    <div className="App">
      <div className="app_body">
        <SideBar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
