import React, { Component } from "react";
import Card from "../components/Card";
import Modal from 'react-bootstrap/Modal'
import image5 from '../images/5.jpg'; 
import image6 from '../images/6.jpg'; 
import image7 from '../images/7.jpg'; 
import image8 from '../images/8.jpg'; 
import image9 from '../images/img1.jpg'; 
import image10 from '../images/img2.jpg';
import image11 from '../images/img3.jpg';
import image12 from '../images/img4.jpg';


const API = {
  getAppart: () => {
    return ([{
      image: image5,
      title: "Whatever Property"
    },{
      image: image6,
      title: "Whatever Property"
    },{
      image: image7,
      title: "Whatever Property"
    },{
      image: image8,
      title: "Whatever Property"
    },{
      image: image9,
      title: "Whatever Property"
    },{
      image: image10,
      title: "Whatever Property"
    },{
      image: image11,
      title: "Whatever Property"
    },{
      image: image12,
      title: "Whatever Property"
    }])
  }
}


class Properties extends Component {
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
          <div className="row justify-content-center">
              {this.state.appartments.map(appartment => {
                return <Card image={appartment.image} title={appartment.title} open={this.open} />
              })}
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
export default Properties;