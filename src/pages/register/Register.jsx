import "./register.css"
import { NavLink } from "react-router-dom";


export default function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <img src="/assets/logo.jfif" alt="" className="loginLogoImg" />
                <h3 className="loginLogo">SAMsocial</h3>
                <span className="loginDesc">
                    Connect with friends and the world around you on SAMsocial
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Username"  className="loginInput" />
                    <input placeholder="Email"  className="loginInput" />
                    <input placeholder="Password"  className="loginInput" />
                    <input placeholder="Password Again"  className="loginInput" />
                    <button className="loginButton">Sign Up</button>
                    <NavLink exact to="/login"><button className="loginRegisterButton">Log Into Account</button></NavLink>
                </div>
            </div>
        </div>
    </div>
  )
}

