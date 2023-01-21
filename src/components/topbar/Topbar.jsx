import "./topbar.css"
import { Chat, Notifications, Person, Search } from "@mui/icons-material"
import { NavLink } from "react-router-dom";
function Topbar(){

    return <div className="topbarContainer">
        <div className="topbarLeft">
        <NavLink className="nav-link" exact to="/"><img src="/assets/logo.jfif" alt="" className="topbarLogo" /></NavLink>
        <NavLink className="nav-link" exact to="/"><span className="logo">SAMsocial</span></NavLink>
        </div>
        <div className="topbarCenter">
            <div className="searchbar">
                <Search className="searchIcon"/>
                <input placeholder="search for friends, posts or any video" className="searchInput" />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLinks">HomePage</span>
                <span className="topbarLinks">Timeline</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <Person/>
                    <span className="topbarIconBadge">9</span>
                </div>
                <div className="topbarIconItem">
                    <Chat/>
                    <span className="topbarIconBadge">9</span>
                </div>
                <div className="topbarIconItem">
                    <Notifications/>
                    <span className="topbarIconBadge">9</span>
                </div>
            </div>
            <NavLink exact to="/profile"><img  src="/assets/person/5.jpg.jfif" alt="" className="topbarImg" /></NavLink>
        </div>
    </div>
}

export default Topbar;