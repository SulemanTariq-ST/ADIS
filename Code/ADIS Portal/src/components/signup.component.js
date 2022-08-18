import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (           

            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Full Name</label>
                    <input type="text" className="form-control" placeholder="Full Name" />
                </div>

                <div className="form-group">
                    <label>User Type</label>
                    <input type="text" className="form-control" placeholder="User Type" />
                </div>

                <div className="form-group">
                    <label>User Name</label>
                    <input type="email" className="form-control" placeholder="Enter Username" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                {/* <button type="submit" className="btn btn-primary btn-block">Sign Up</button> */}
                <button type="submit" className="btn btn-warning btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>

        );
    }
}