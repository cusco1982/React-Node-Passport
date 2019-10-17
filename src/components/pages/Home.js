import React from "react";

function Home() {
  return (
    <div class="row mt-5">
        <div class="col-md-6 m-auto">
          <div class="card card-body text-center">
            
            <h1><i class="fas fa-home"></i></h1>
            <p>Create an account or login</p>
            <a href="/users/register" class="btn btn-primary btn-block mb-2">Register</a>
            <a href="/users/login" class="btn btn-secondary btn-block">Login</a>
            
          </div>
        </div>
      </div>
  );
}

export default Home;
