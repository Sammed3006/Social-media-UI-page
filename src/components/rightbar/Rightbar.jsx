import "./rightbar.css"
import { users } from "../../rowData"
import Online from "../online/Online"
import Profile from "../../pages/profile/Profile"

export default function Rightbar({profile}){

    const HomeRightbar = () => {
        return(<>
                <div className="birthdayContainer">
                <img src="/assets/gift.jfif" alt="" className="birthdayImg" />
                <span className="birthdayText"><b>Virat</b> and <b>3 others</b> have birthday today</span>
            </div>
            <hr className="rightbarHr"/>
            <h4 className="rightbarTitle">Online Friends</h4>
            <ul className="rightbarFriendList">
               {users.map(u=>(<Online key={u.id} user={u}/>))} 
            </ul>
            <img src="/assets/ad.jfif" alt="" className="rightbarAd" />

        </>)
    }

    const ProfileRigtbar = () =>{
            return(<>
            <h4 className="rightbarTitle"> User information  </h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">city :</span>
                    <span className="rightbarInfoValue">New York</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">From :</span>
                    <span className="rightbarInfoValue">Madrid</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship :</span>
                    <span className="rightbarInfoValue">Single</span>
                </div>
            </div>
            <h4 className="rightbarTitle">User Friends</h4>
            <div className="rightbarFollowings">
                <div className="righatbarFollowing">
                    <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">kyle</span>
                </div>
                <div className="righatbarFollowing">
                    <img src="assets/person/2.jpg.jfif" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">jiana</span>
                </div>
                <div className="righatbarFollowing">
                    <img src="assets/person/3.jpg.jfif" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">rasio</span>
                </div>
                <div className="righatbarFollowing">
                    <img src="assets/person/4.jpg.jfif" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">angelia</span>
                </div>
                <div className="righatbarFollowing">
                    <img src="assets/person/5.jpg.jfif" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Virat</span>
                </div>
                <div className="righatbarFollowing">
                    <img src="assets/person/6.jpg.jfif" alt="" className="rightbarFollowingImg" />
                    <span className="rightbarFollowingName">Ratan tata</span>
                </div>
            </div>
            </>)
    }
    return(
    <div className="rightbar">
        <div className="rightbarWrapper">
         {profile ? <ProfileRigtbar/> : <HomeRightbar/>}
        </div>
    </div>
    )
}