import React, { Component } from "react";
import Card from "../components/Card";



// const API = {
//   getAppart: () => {
//     return ([{
//       image: "https://via.placeholder.com/150",
//       title: "Whatever Property"
//     }])
//   }
// }


class Tenants extends React.Component() {

  state = {
    email: '',
    pass: ''
  }

  onSubmit = () => {
    const email = this.state.email;
    const pass = this.state.pass;
    API.login({ email: email, pass: pass })
  }

  render() {
    return (
      <Login onChange={this.onChange} onSubmit={this.onSubmit} />
    )
  }

  componentDidMount() {
    this.loadAppart();
  }

  loadAppart = () => {
    // API.getAppart()
    // .then(res =>
    //   this.setState({ appartments: res.data })
    // )
    // .catch(err => console.log(err));

    const appartments = API.getAppart()

    this.setState({ appartments: appartments })

  };
  render() {
    return (
      <div class="container-fluid">
        <video autoPlay muted loop id="myVideo">
          <source src={image} type="video/mp4" />
        </video>

        <div class="row animated fadeInDown delay-1s">
          <div class="col-md-12 search">
            <h1 class="htitle">Welcome to Advanced Property Management</h1>
          </div>
        </div>
        <div className="content">

          <div className="row justify-content-center">
            <div className="container-fluid">
              <h3 className="hed3">Featured properties</h3>
              {this.state.appartments.map(appartment => {
                return <Card image={appartment.image} title={appartment.title} openModal={this.openModal} />
              })}

            </div>
          </div>
        </div>
      </div>



    );
  }
}
export default Main;