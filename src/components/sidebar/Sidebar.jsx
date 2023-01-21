import "./sidebar.css"
import { Bookmark, Group, HelpOutline, PlayCircleFilledOutlined, RssFeed, School, WorkOutline,Event, Chat } from "@mui/icons-material"
import { users } from "../../rowData"
import CloseFriend from "../closeFriend/CloseFriend"

export default function Sidebar(){
    return<div className="sidebar">
        <div className="sidebarWrapper">
            <ul className="sidebarList">
                <li className="sidebarListItem">
                    <RssFeed className="sidebarIcon"/>
                    <span className="sidebarListitemText">Feed</span>
                </li>
                <li className="sidebarListItem">
                    <Chat className="sidebarIcon"/>
                    <span className="sidebarListitemText">Chat</span>
                </li>
                <li className="sidebarListItem">
                    <PlayCircleFilledOutlined className="sidebarIcon"/>
                    <span className="sidebarListitemText">Videos</span>
                </li>
                <li className="sidebarListItem">
                    <Group className="sidebarIcon"/>
                    <span className="sidebarListitemText">Groups</span>
                </li>
                <li className="sidebarListItem">
                    <Bookmark className="sidebarIcon"/>
                    <span className="sidebarListitemText">Bookmarks</span>
                </li>
                <li className="sidebarListItem">
                    <HelpOutline className="sidebarIcon"/>
                    <span className="sidebarListitemText">Help</span>
                </li>
                <li className="sidebarListItem">
                    <WorkOutline className="sidebarIcon"/>
                    <span className="sidebarListitemText">Jobs</span>
                </li>
                <li className="sidebarListItem">
                    <Event className="sidebarIcon"/>
                    <span className="sidebarListitemText">Events</span>
                </li>
                <li className="sidebarListItem">
                    <School className="sidebarIcon"/>
                    <span className="sidebarListitemText">Education</span>
                </li>
            </ul>
            <button className="sidebarButton">Show More</button>
            <hr className="sidebarHr" />
            <ul className="sidebarFriendList">
              {users.map(u=>(<CloseFriend key={u.id} user={u}/>))} 
            </ul>
        </div>
    </div>
}