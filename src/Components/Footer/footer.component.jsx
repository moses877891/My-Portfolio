import React from "react";

import './footer.styles.css';

import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="txt">
            <div
                className="container-fluid text-center mt-5"
                style={{ backgroundColor: "black" }}
            >
                <p className="text-light pt-3">CONTACT ME @</p>
                <a href="mailto:mosesantonymas@gmail.com"
                    style={{ textDecoration: "none", color: "white", }}>
                    <i className="fas fa-envelope mail"></i>
                </a>&emsp;&ensp;
                <a href="tel:+91 8778919958"
                    style={{ textDecoration: "none", color: "white" }}>
                    <i className="fas fa-phone mail "></i>
                </a>
                <p className="text-light pt-3">Want to talk to me ?</p>
                <Link to="/contact" ><button className="btn btn-outline-light btn-md bt">Lets talk</button></Link>
                <div className="row py-5">
                    <div className="col-12 col-md-4">
                        <h5 className="text-info">more links</h5>
                        <Link to="/" className="text-light d-block lin">HOME</Link>
                        <Link to="/contact" className="text-light d-block lin">CONTACT ME</Link>
                        <Link to="/projects" className="text-light d-block lin">PROJECTS</Link>
                        <Link to="/write-a-recommendation" className="text-light d-block lin"
                        >WRITE A RECOMMENDATION
                            <i className="fas fa-heart text-danger"></i>
                        </Link>
                    </div>
                    <div className="col-12 col-md-4">
                        <p className="text-light my-5">
                            The way to get started is to quit talking and being done.
                        </p>
                    </div>
                    <div className="col-12 col-md-4">
                        <h5 className="text-info">Social</h5>
                        <a
                            href="https://www.instagram.com/nightmare_moses/?hl=en"

                        ><i className="fab fa-instagram trans"></i>
                        </a><br />
                        <a
                            href="https://www.facebook.com/moses.moses.71066?__tn__=%3C"

                        ><i className="fab fa-facebook-square trans"></i>
                        </a><br />
                        <a
                            href="https://in.linkedin.com/in/moses-antony-shankar-s-4573671a7"

                        ><i className="fab fa-linkedin trans"></i>
                        </a><br />
                        <a
                            href="https://github.com/moses877891"
                        >
                            <i className="fab fa-github trans"></i>
                        </a>
                    </div>
                </div>
                <p className="align-items-center py-5 text-muted">
                    copyright @ moses antony shankar 2020
                </p>
            </div>
        </footer>
    );
}

export default Footer;