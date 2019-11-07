import React, { Component } from "react";
// import Login from "../components/Login";
// import API from "../utils/API"
// import { Link } from "react-router-dom";
import axios from "axios"




export default class Signup extends Component {

    state = {
        email: '',
        password: ''
    };

    // onSubmit = () => {
    //     const email = this.state.email;
    //     const pass = this.state.pass;
    //     API.login({ email: email, pass: pass })
    // }


    render() {
        return (
    <div className="container-fluid imgcont1">
      <div className="row mt-5">
        <div className="col-md-6 m-auto">
          <div className="card card-body reg">
            <h1 className="text-center mb-4">
              <i className="fas fa-user-plus"></i> Register
            </h1>
            {/* <% include ./partials/messages %> */}
          <form action="/users/register" method="POST">
            <div className="row">
              <div className="col-md">
                <div className="form-group">
                  <label for="firstname"> First Name</label>
                  <input
                    type="text"
                    id="name"
                    name="firstname"
                    className="form-control input input"
                    placeholder="Enter First Name"
                    />
                </div>
              </div>
              <div className="col-md">
                <div className="form-group">
                  <label for="lastname"> Last Name</label>
                  <input
                    type="text"
                    id="name"
                    name="lastname"
                    className="form-control input"
                    placeholder="Enter Last Name"
                    />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md">
                <div className="form-group">
                  <label for="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control input"
                    placeholder="Enter Email"
                    />
                </div>

              </div>

              <div className="col-md">
                <div className="form-group">
                  <label for="tel">Telephone</label>
                  <input
                    type="tel"
                    id="tel"
                    name="tel"
                    className="form-control input"
                    placeholder="XXX-XXX-XXXX"
                     />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-md">
                <div className="form-group">
                  <label for="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control input"
                    placeholder="Create Password"
                     />
                </div>
              </div>

            
              <div className="col-md">
                <div className="form-group">
                <label for="password2">Confirm Password</label>
                <input
                  type="password"
                  id="password2"
                  name="password2"
                  className="form-control input"
                  placeholder="Confirm Password"
                  
                />
              </div>
            </div>

           
              <button type="submit" className="btn btn-primary btn-block mt-4">
                Register
              </button>
              

            <div className="d-flex justify-content-center">
              <p className="lead mt-4">Have An Account? <a href="/users/login">Login</a></p>
              </div>
              </div>
            </form>
            
          </div>
        </div>
      </div>
      </div>
      
      

        )
    }
}
