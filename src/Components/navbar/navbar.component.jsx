import React from 'react';
import './navbar.styles.css';

import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar navbar-light sticky-top navbar-expand-sm txt" style={{ backgroundColor: "black" }}>
            <div className="container my-2">
                <Link to='/' className="navbar-brand text-light brnd" ><i className="fas fa-address-card">Portfolio</i></Link>
            </div>
            <Link to="/contact" className="ml-auto mx-3">
                <button className="btn btn-outline-danger bt" style={{ width: "auto", borderColor: "black" }}>
                    <div className="text-light" style={{ width: "100px" }}>Contact me</div>
                </button>
            </Link>
            <button
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#collapseNav"
            >
                <div className="anime">
                    <span className="fas fa-bars clr"></span>
                </div>
            </button>
            <div className="collapse navbar-collapse flex-grow-0" id="collapseNav">
                <div className="navbar-nav">
                    <Link to="/write-a-recommendation" className="nav-item nav-link text-light font-weight-bolt h6 mx-1 my-auto navb">
                        RECOMMENDATION</Link>
                    <Link to="/projects" className="nav-item nav-link text-light font-weight-bolt h6 mx-1 my-auto navb">
                        PROJECTS</Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;