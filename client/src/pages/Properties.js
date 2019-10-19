import React, { Component } from "react";
import Card from "../components/Card";



const API = {
  getAppart: () => {
    return ([{
      image: "https://via.placeholder.com/100",
      title: "Whatever Property"
    }])
  }
}


class Properties extends Component {
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
      <div class="container-fluid">
          <div className="row justify-content-center">
              {this.state.appartments.map(appartment => {
                return <Card image={appartment.image} title={appartment.title} openModal={this.openModal} />
              })}
          </div>
      </div>



    );
  }
}
export default Properties;