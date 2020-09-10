import React from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";

import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AttachFile from "@material-ui/icons/AttachFile";
import MoreVert from "@material-ui/icons/MoreVert";

function Chat() {
  return (
    <div className="chat">
      <div className="chatHeader">
        <Avatar />
        <div className="chatHeader_info">
          <span>Room name</span>
          <p>Last seen at ...</p>
        </div>
        <div className="chatHeader_right">
          <IconButton>
            <SearchOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chatBody"></div>
    </div>
  );
}

export default Chat;
