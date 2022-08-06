import React, {Component} from "react";
import {Link} from "react-router-dom";
import {RiBankCardFill} from "react-icons/ri"
import {FaBars, FaTimes} from "react-icons/fa"
import Button from "./Button";
import "./Navbar.css"
import {IconContext} from "react-icons/lib";

class Navbar extends Component {
    state = {
        click: false,
        button: true
    }
// Handle Functions
   handleClick = () => {
        this.setState({click : !this.state.click})
   }
   // By clicking it closes the navigation panel
   closeMobileMenuFunction = () => {
        this.setState({click: false})
    }
   handleButton = () => {
        if(window.innerWidth <= 960){
            this.setState({button: false})
        }else{
            this.setState({button: true})
        }
    }
    render() {
        // it starts working while changing the size of window
        window.addEventListener("resize", this.handleButton)
        return (
            <>
                <IconContext.Provider value={{color : "white"}}>
                <div className="navbar">
                    <div className="navbar-container container">
                        <Link to='/' className='navbar-logo' onClick={this.closeMobileMenuFunction}>
                            <RiBankCardFill className="navbar-icon"/> SAFETY BANK
                        </Link>
                        <div onClick={this.handleClick} className="menu-icon">
                            {this.state.click ? <FaTimes/> : <FaBars/>}
                        </div>
                        <ul className={this.state.click ? "nav-menu active" : "nav-menu"}>
                            {/*Navigation panel items*/}
                            <li className="nav-item" onClick={this.closeMobileMenuFunction}>
                                <Link to='/' className="nav-links">Home</Link>
                            </li>
                            <li className="nav-item" onClick={this.closeMobileMenuFunction}>
                                <Link to='/services' className="nav-links">Services</Link>
                            </li>
                            <li className="nav-item" onClick={this.closeMobileMenuFunction}>
                                <Link to='/products' className="nav-links">Products</Link>
                            </li>
                            <li className="nav-btn">
                                {/* Button component attachment*/}
                                {this.state.button ?  (
                                    <Link to='/sign-up' className="btn-link" >
                                        <Button
                                            onClick={this.closeMobileMenuFunction}
                                            buttonStyle={"btn--outline"} name="Sign Up">Sign Up</Button>
                                    </Link>
                                ) : ( <Link to='/sign-up' className="btn-link">
                                    <Button onClick={this.closeMobileMenuFunction} buttonStyle={"btn--outline"}
                                            buttonSize = {"btn--mobile"} name="Sign Up">Sign Up</Button>
                                </Link>)
                                }
                            </li>
                        </ul>
                    </div>
                </div>
                </IconContext.Provider>
            </>
        )
    }
}
export default Navbar;