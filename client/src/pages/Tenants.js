import React, { Component } from "react";
import Login from "../components/Login";
import API from "../utils/API"
import { Link } from "react-router-dom";
import axios from "axios"




export default class Tenants extends Component {

  state = {
    email: '',
    pass: ''
  };

  onSubmit = () => {
    const email = this.state.email;
    const pass = this.state.pass;
    API.login({ email: email, pass: pass })
  }


  render() {
    return (
      <div className="container-fluid imgcont">
        <div className="row justify-content-center">
          <div className="col-md-4 col3 animated fadeInUp slow delay">
            <div className="jumbotron tent">
              <h2>Online Portal</h2>
              <h4>Pay rent, submit maintenance requests, and view your account from anywhere.</h4>
            </div>
          </div>

          <div className="col-md-4 col3 animated fadeInUp slow delay">
            <div className="jumbotron tent1">
              <Login onChange={this.onChange} onClick={this.onSubmit} />
              <p class="lead mt-4">
          No Account? <Link className="register-link" to="/register">Register</Link>
        </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
