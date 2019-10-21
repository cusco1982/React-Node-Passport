import React from "react";


function Login(props) {
  return (

    <div className="col-md-4 col3 animated fadeInUp slow delay">
      <div className="jumbotron tent1">

          <div className="loginput">
            <label for="email">Your Email Address</label>
            <input className="form-control" type="email" id="email" name="email" required onChange={props.onChange}/>
          </div>
          <div className="loginput">
            <label for="password">Password</label>
            <input className="form-control" type="password" id="password" name="password" required onChange={props.onChange}/>
          </div>
          <br />
          <div>
            <button type="submit" className="btn btn-primary btn-lg btn-block" style={{marginBottom: "10px"}} onClick={props.onSubmit}>Login Now</button>
          </div>
      </div>
    </div>

  )
}

export default Login;
