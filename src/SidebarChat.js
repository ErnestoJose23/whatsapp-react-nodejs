import React from "react";
import "./SidebarChat.css";
import { Avatar } from "@material-ui/core";

function SidebarChat() {
  return (
    <div className="sidebarChat">
      <Avatar src="https://image.cnbcfm.com/api/v1/image/105755683-1550853148548gettyimages-109478107.jpeg?v=1581098226&w=1400&h=950" />
      <div className="info">
        <span>Name</span>
        <p>Last message</p>
      </div>
    </div>
  );
}

export default SidebarChat;
