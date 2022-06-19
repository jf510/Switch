import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import Avatar from "@mui/material/Avatar";
import ChatIcon from "@mui/icons-material/Chat";
import SearchIcon from "@mui/icons-material/Search";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DonutLargeIcon from "@mui/icons-material/DonutLarge";
import SidebarChat from "./SidebarChat";
import { IconButton } from "@mui/material";

function Sidebar() {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="sidebar">
      {/** Header */}
      <div className="sidebar__header">
        {/** avatar */}
        <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQESe6JkUSQ9Zw/profile-displayphoto-shrink_100_100/0/1559224235392?e=1660780800&v=beta&t=WER0QHAU3FJtrHP3A9vnuFPyVY4VKCEY6jldJoOhx24" />
        <div className="sidebar__headerRight"> {/** Icons/Links */}</div>
        {/** input: Adding a chat room */}
        <IconButton>
          <DonutLargeIcon />
        </IconButton>
        <IconButton>
          <ChatIcon />
        </IconButton>
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <input type="text" placeholder="Search or start a chat" />
        </div>
      </div>

      {/** Chat Rooms */}
      <div className="sidebar__chats">
        <SidebarChat />
        <SidebarChat />
        <SidebarChat />
      </div>
    </div>
  );
}

export default Sidebar;
