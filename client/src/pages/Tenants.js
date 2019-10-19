import React, { Component } from "react";
import Login from "../components/Login";
import API from "../utils/API"



class Tenants extends Component {

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
      <div class="container-fluid imgcont">
        <div class="row justify-content-center">
          <div class="col-md-4 col3 animated fadeInUp slow delay">
            <div class="jumbotron tent">
              <h2>Online Portal</h2>
              <h4>Pay rent, submit maintenance requests, and view your account from anywhere.</h4>
            </div>
          </div>

          <div class="col-md-4 col3 animated fadeInUp slow delay">
            <div class="jumbotron tent1">
              <Login onChange={this.onChange} onClick={this.onSubmit} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
  export default Tenants;