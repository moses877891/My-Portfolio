import React, { Component } from "react";
import { addToFireStore } from "../../Firebase/firebase.utils";

class WriteRecommendation extends Component {
    state = {
        name: "",
        email: "",
        company: "",
        designation: "",
        recommendationMessage: "",
        submitMessage: "",
        submitMessageTextColor: "",
        createdAt: ""
    };

    recommendation = {};

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    onSubmit = (event) => {
        event.preventDefault();

        let isSuccessful = true;
        const { name } = this.state;
        const time = new Date();

        if (isSuccessful) {
            this.setState({
                submitMessage: `Thank you ${name} for the recommendation! I really appreciate it.`,
                submitMessageTextColor: "text-info",
            });
        } else {
            this.setState({
                submitMessage: "Oops! Something went wrong. Please try again later :(",
                submitMessageTextColor: "text-danger",
            });
        }
        this.recommendation = {
            name: this.state.name,
            email: this.state.email,
            company: this.state.company,
            designation: this.state.designation,
            recommendationMessage: this.state.recommendationMessage,
            createdAt: time
        }
        this.setState({
            name: "",
            email: "",
            company: "",
            designation: "",
            recommendationMessage: "",
            createdAt: ""
        })
        console.log(this.recommendation);
        if (this.recommendation.name && this.recommendation.recommendationMessage) {
            return addToFireStore('recommendations', this.recommendation);
        };
    };

    render() {
        const { submitMessage, submitMessageTextColor } = this.state;
        return (
            <div className="container my-5 py-5 txt">
                <h1 className="font-weight-light text-center py-5">
                    <span className="text-info">Thank you! </span>for taking your time
                </h1>
                <div className="row justify-content-center">
                    <div className="col-11 col-lg-5">
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    className="form-control"
                                    onChange={this.onChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    onChange={this.onChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="company">Company / Institution *</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="company"
                                    onChange={this.onChange}
                                    required
                                ></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="designation">Designation *</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="designation"
                                    onChange={this.onChange}
                                    required
                                ></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="recommendationMessage">
                                    Recommendation *
                                </label>
                                <textarea
                                    className="form-control"
                                    name="recommendationMessage"
                                    rows="5"
                                    onChange={this.onChange}
                                    required
                                ></textarea>
                            </div><br />
                            <button
                                type="submit"
                                className="btn btn-danger float-right"
                            >
                                Send
                            </button>
                        </form>
                    </div>
                </div>
                <div className="py-5 mx-2 text-center">
                    <h5 className={submitMessageTextColor}>{submitMessage}</h5>
                </div>
            </div>
        )
    }
}

export default WriteRecommendation;