import React from "react";
import "./SideBar.css";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import { IconButton, Avatar } from "@material-ui/core";
import SidebarChat from "./SidebarChat";

function SideBar({ setChatroom, chatrooms }) {
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
      <div className="search">
        <div className="searchContainer">
          <SearchOutlinedIcon />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div>

      <div className="chats">
        {chatrooms.map((chatroom) => (
          <SidebarChat />
        ))}
      </div>
    </div>
  );
}

export default SideBar;
