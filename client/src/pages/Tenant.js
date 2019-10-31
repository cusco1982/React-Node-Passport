import React, { Component } from "react";
import Modal from 'react-bootstrap/Modal'
// import { Link } from "react-router-dom";
// import API from "../utils/API";




class Tenant extends Component {
state = {
  showModal: false
}
  

open = () => {
  this.setState({ showModal: true });
}
close = (event) => {
  if (event) event.preventDefault();
  this.setState({ showModal: false });
}
  


  render() {
    return (

      <div class="container-fluid">

        {/* <video autoplay muted loop id="myVideo">
          <source src="./assets/images/video.mp4" type="video/mp4" />
        </video> */}

        <div className="row justify-content-center">
          <div className="card cards3 animated fadeInUp slow">
            <div className="card-header">
              Your Property Address:
            </div>
            <div className="card-body">
              <h5 className="card-title">{this.propaddress}</h5>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-md-5 col3 animated fadeInUp slow delay">
            <div className="jumbotron tent2">
              <h2>Customer Profile</h2>
              <h5>Name: </h5>
              <h5>Phone: </h5>
              <h5>Email: </h5>
              <h5>Rent: </h5>
              <h5>Next Rent Due:</h5>
            </div>
          </div>

          <div className="col-md-5 col3 animated fadeInUp slow delay">
            <div className="jumbotron tent2">
              <button type="button" name="issueModal" className="btn btn-primary btn-lg btn-block" onClick={this.open}>Request Maintenance</button>
              <br />
                <button type="button" name="payRentModal" className="btn btn-primary btn-lg btn-block" onClick={this.modal}>Pay Rent</button>
                <br />
                  <button type="button" className="btn btn-primary btn-lg btn-block">Contact Us</button>
                  <br />

  </div>
</div>

</div>

  <Modal
    show={this.state.showModal} onHide={this.close}>
    <Modal.Header closeButton>
      <Modal.Title>
        <h5>Report an Issue</h5>
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
<form>
  <div class="form-group">
    <label className="col-form-label">Your Name:</label>
    <input type="text" className="form-control" placeholder="Your Name...."/>
</div>
    <div class="form-group">
      <label className="col-form-label">Your Phone:</label>
      <input type="tel" className="form-control" placeholder="XXX-XXX-XXXX"/>
</div>
      <div className="form-group">
        <label className="col-form-label">Please provide the details of the issue:</label>
        <textarea className="form-control"></textarea>
      </div>
      <div class="modal-footer">
        <button type="submit" className="btn btn-success submit" >Submit</button>
        <button type="close" onClick={this.close} className="btn btn-success submit" >Close</button>
      </div>
    </form>
  </Modal.Body>
</Modal>

</div>
 )
}
}            
    

export default Tenant;
