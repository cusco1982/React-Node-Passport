import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import API from "../utils/API";



class Admin extends Component {

  headers = {
    tenant: ["First Name", "Last Name", "Address", "Phone", "Email", "Price"],
    tickets: ["First Name", "Phone", "Message"],
    units: ["Address", "City", "Zipcode", "State", "Rooms", "Price", "SqFt"]
  }

  state = {
    whichheader: this.headers.tenant,
    masterdata: { firstname: "Andrew",
                  lastname: "Wilman",
                  address: "1215 Main Street, Linden, NJ",
                  phone: "908-777-3434",
                  email: "andrew@yahoo.com",
                  price:"$1800"
          },
  }
        

  

  onClick = (e) => {
    const btnname = e.target.name
    this.setState({
      whichheader: this.headers[btnname]
    })
  }
  // Add code to get the book with an _id equal to the id in the route param
  // e.g. http://localhost:3000/books/:id
  // The book id for this route can be accessed using this.props.match.params.id



  // componentDidMount() {
  //   console.log(window.location.href);
  //   const hrefSplit = window.location.href.split("/");
  //   const id = hrefSplit[hrefSplit.length - 1];

  //   console.log(id);

  //   API.getBook(id).then(response => this.setState({ book: response.data }))
  // }

  render() {
    return (

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="butdom">
            <button type="button" onClick={this.onClick} name="tenant" className="btn btn-primary btn-lg btn-block">Manage Tenants</button>
            <button type="button" onClick={this.onClick} name="units" className="btn btn-primary btn-lg btn-block">Manage Properties</button>
            <button type="button" onClick={this.onClick} name="tickets" className="btn btn-primary btn-lg btn-block">Manage Tickets</button>
            </div>
            </div>
            

<div className="col-md-9">
        {/* <h2>Tenants Management</h2> */}

        <table class="table table-striped">
          <thead>
            <tr>
              {this.state.whichheader.map((columnname, key) =>
                <th key={key}>{columnname}</th>
              )}
            </tr>
          </thead>
          <tbody>
            {/* {this.state.masterdata.map((alldata, key)=> */}
              <tr>
                {/* {this.alldata.map((anytd, key) =>
                  <td key={key}>{anytd}</td>
                )} */}

                <td>Andrew</td>
                <td>Wallas</td>
                <td>1215 Main Street, Linden, NJ</td>
                <td>908-333-4444</td>
                <td>andrew@email.com</td>
                <td>$1800</td>
              </tr>
            {/* )} */}
        </tbody>
        </table>
      </div>
      </div>
      </div>
    );
  }
}

export default Admin;
