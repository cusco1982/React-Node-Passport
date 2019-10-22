import React, { Component } from "react";
import Card from "../components/Card";
import video from "../images/video.mp4";


const API = {
  getAppart: () => {
    return ([{
      image: "https://via.placeholder.com/150",
      title: "Whatever Property"
    }])
  }
}


class Main extends Component {
  state = {
    appartments: []
  };

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
      <div className="container-fluid">
        <video autoPlay muted loop id="myVideo">
          <source src={video} type="video/mp4" />
        </video>

        <div className="row animated fadeInDown delay-1s">
          <div className="col-md-12 search">
            <h1 className="htitle">Welcome to Advanced Property Management</h1>
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