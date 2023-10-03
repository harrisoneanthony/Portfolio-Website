import React, { Component } from "react";
import '../static/styles/NavbarStyles.css';
import { Link, NavLink } from "react-router-dom"; // Import Link from react-router-dom

class Navbar extends Component {
    state = { clicked: false };

    handleClick = (e) => {
        this.setState({ clicked: !this.state.clicked })
    }

    render() {
        return (
            <>
                <nav>
                    <Link to="/">
                        <img src="/logoipsum-276.svg" className="NavLogo" alt="navlogo" />
                    </Link>
                    <div>
                        <ul id='navbar' className={this.state.clicked ? "#navbar active" : "#navbar"}>
                            <li><NavLink to="/" activeclassname="active"> Home </NavLink></li>
                            <li><NavLink to="/projects" activeclassname="active"> Projects</NavLink></li>
                            <li><NavLink to="/about" activeclassname="active"> About </NavLink></li>
                            <li><NavLink to="/contact" activeclassname="active"> Contact </NavLink></li>
                        </ul>
                    </div>
                    <div id="mobile" onClick={this.handleClick}>
                        <i id="bars" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar;
