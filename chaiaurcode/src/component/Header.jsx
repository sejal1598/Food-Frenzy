// import logo from "./assets/download.png"
// import "../src/index.css"
import { useEffect, useState } from "react"
import logo from "../assets/download.png"
import { Link } from "react-router-dom";
function Header() {
    const [btnLogin, setBtnLogin] = useState("Login")

    useEffect(() => {
        console.log("ggg");

    }, [btnLogin])
    const handleLogin = () => {
        btnLogin === "Login" ? setBtnLogin("Logout") : setBtnLogin("Login")
    }
    return (
        <div className="header">
            <div className='logo-container'>
                <img className='logo' src={logo} />

            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={handleLogin}>{btnLogin}</button>
                </ul>

            </div>
        </div>
    )
}
export default Header