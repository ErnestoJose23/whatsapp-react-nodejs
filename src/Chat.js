import React from "react";
import "./Chat.css";
import { Avatar, IconButton } from "@material-ui/core";

import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import AttachFile from "@material-ui/icons/AttachFile";
import MoreVert from "@material-ui/icons/MoreVert";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";

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
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chat_body">
        <p className="chat_message">
          <span className="chat_name">Sho</span>
          Message
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>
        <p className="chat_message chat_reciever">
          <span className="chat_name">Sho</span>
          Message
          <span className="chat_timestamp">{new Date().toUTCString()}</span>
        </p>
      </div>

      <div className="chat_footer">
        <IconButton>
          <InsertEmoticonIcon />
        </IconButton>
        <IconButton>
          <AttachFile />
        </IconButton>
        <form>
          <input placeholder="Type a message" type="text" />
          <button type="submit">Send</button>
        </form>

        <IconButton>
          <MicIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Chat;
