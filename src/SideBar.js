import React from "react";
import "./SideBar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { IconButton, Avatar } from "@material-ui/core";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="header">
        <Avatar
          src="https://upload.wikimedia.org/wikipedia/commons/4/43/Tom_Hardy_by_Gage_Skidmore.jpg"
          className="avatar"
        ></Avatar>
        <div className="headerRight">
          <IconButton>
            <DonutLargeIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <ChatIcon fontSize="small" />
          </IconButton>
          <IconButton>
            <MoreVertIcon fontSize="small" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
