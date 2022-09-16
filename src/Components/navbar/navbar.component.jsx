import React from 'react';
import './navbar.styles.css';

import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar navbar-light sticky-top navbar-expand-lg txt" style={{ backgroundColor: "black" }}>
            <div className="my-2 container">
                <Link to='/' className="navbar-brand text-light brnd" ><i className="fas fa-address-card">Portfolio</i></Link>
            </div>
            <div className='container justify-content-end'>
                <Link to="/contact" className="ml-auto mx-3">
                    <button className="btn btn-outline-danger " style={{ width: "auto", borderColor: "black" }}>
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
                    <div className="navbar-nav align-items-end">
                        <Link to="/write-a-recommendation" className="nav-item text-light font-weight-bolt h6 mx-1 my-auto navb">
                            RECOMMENDATION</Link>
                        <Link to="/projects" className="nav-item text-light font-weight-bolt h6 mx-1 my-auto navb">
                            PROJECTS</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;