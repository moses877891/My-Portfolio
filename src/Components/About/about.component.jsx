import React from "react";

function About() {
    return (<div className="bg-light w-100">
        <div className="container text-center py-5">
            <h1 className="font-weight-light text-center">
                <span className="text-danger">About</span> me
            </h1>
        </div>
        <div className="container text-center">
            <div className="row pb-5">
                <div className="col-12 col-md-6 pb-5">
                    <h4 className="font-weight-bold">What am I doing currently?</h4>
                    <p>
                        Pursuing B.E. Electronics And Communication(3rd year) in
                        R.M.K. Engineering College with a gpa of 7.90 , Has some relevant skills and experience in Full-Stack Development.
                    </p>
                </div>
                <div className="col-12 col-md-6">
                    <h4 className="font-weight-bold">What Am I good at?</h4>
                    <p>
                        JAVASCRIPT, Working with React, SQL, Firebase, Redux, Communicating with others,analytical skills
                        and also I tend to be a bit Motivational & Enthusiastic.
                    </p>
                </div>

            </div>
            <div className="row py-4">
                <div className="col-12 col-md-6 pb-5">
                    <h4 className="font-weight-bold">What do i believe in?</h4>
                    <p>
                        I believe in hard-work not luck, not time but hard-work. i do believe
                        if someone want to succeed in life it requires nothing but a 100%
                        hard-work
                    </p>
                </div>
                <div className="col-12 col-md-6">
                    <h4 className="font-weight-bold">My Hobbies</h4>
                    <p>Working with react(The fun part), listening to music,
                        Reading books.</p>
                </div>
            </div>
        </div>
    </div>
    );
}
export default About;