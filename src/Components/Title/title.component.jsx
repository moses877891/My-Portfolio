import React from "react";
import MOSES from "../../Assets/moses-photo3.jpg";
import './title.styles.css';

function Title(props) {
    const { firstName, lastName, leadText } = props;
    return (
        <div className="bgClr">
            <div className="container mt-3">
                <div className="row text-center align-items-center my-5">
                    <div className="col-12 col-md-6">
                        <img
                            className="img-fluid wid shadow"
                            src={MOSES}
                            alt="moses"
                        />
                    </div>
                    <div className="col-12 col-md-6 pt-5">
                        <div className="font-weight-light" style={{ fontSize: "35px" }}>
                            <span className="text-danger">{firstName}</span> {lastName}
                            <div>
                                <h4 className="font-weight-light">
                                    <span className="text-info">{leadText}</span>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Title.defaultProps = {
    firstName: "MOSES",
    lastName: " antony shankar S",
    leadText: "B.E - Graduate (Fresher)",
}

export default Title;