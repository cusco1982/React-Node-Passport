import React from "react";


function Card(props) {
  return (
    <div className="col-sm-3">
      <div className="card cards animated fadeInUp delay-1s">
        <img src={props.image} className="card-img-top" alt="New Property" />
        <div className="card-body">
          <p className="card-text">{props.title}</p>
        </div>
        <button type="button" className="btn btn-primary btn-lg btn-block" onClick={props.openModal}>Request Info</button>
      </div>
    </div>
  );
}
export default Card;