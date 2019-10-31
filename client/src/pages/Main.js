import React, { Component } from "react";
import Card from "../components/Card";
import Modal from 'react-bootstrap/Modal';
import video from "../images/video.mp4";
import image1 from '../images/1.jpg'; 
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';


const API = {
  getAppart: () => {
    return ([{
      image: image1,
      title: "Whatever Property"
    },{
      image: image2,
      title: "Whatever Property"
    },{
      image: image3,
      title: "Whatever Property"
    },{
      image: image4,
      title: "Whatever Property"
    }])
  }
}




class Main extends Component {
  state = {
    appartments: [],
    showModal: false
  };

  open = () => {
    this.setState({ showModal: true });
  }
  close = (event) => {
    if (event) event.preventDefault();
    this.setState({ showModal: false });
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
      <div>
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
              <h3 className="hed3">Featured properties</h3>
         
          <div className="row justify-content-center">
              
              {this.state.appartments.map(appartment => {
                return <Card image={appartment.image} title={appartment.title} open={this.open} />
                
              })}
          </div>
        </div>
      </div>
      <Modal
        size="lg"
        show={this.state.showModal} onHide={this.close}
        aria-labelledby="example-modal-sizes-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          <h5>Apply for &nbsp;</h5>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form className="myform" action="/api/tenants" method="POST">
              <div className="row">
                <div className="col-md">
                  <label className="lable">Name:</label><br/>
                  <input className="form-control input" type="text" placeholder=" First name.." required/><br/>
                </div>
                <div className="col-md">
                  <label className="lable">Last Name:</label><br/>
                  <input className="form-control input" type="text" placeholder=" Last Name.." required/><br/>
                </div>
              </div>

              <div className="row">
                <div className="col-md">

                  <label className="lable1">Email:</label><br/>
                  <input className="form-control input" type="email" placeholder=" Your@email.." required/>
                  <br/>
                </div>
                <div className="col-md">
                  <label className="lable1">Telephone:</label><br/>
                  <input className="form-control input" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    placeholder="XXX-XXX-XXXX" required/>
                </div>
              </div>


              <label className="lable1">Message:</label><br/>
              <textarea className="form-control text" rows="3" cols="128" placeholder=" Tell me what you need" required></textarea><br/><br/>

              <button className="btn btn-primary btn-lg btn-block">Submit</button><br/>

            </form>

        </Modal.Body>
      </Modal>
      </div>



    );
  }
}
export default Main;