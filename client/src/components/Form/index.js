import React from "react";


function Form(props) {
  return (

    <div className="container fromup">
      <div className="row">

        <div className="col-md">
          <input className="form-control input" type="text" name="address" id="address" placeholder=" Street Address ..." required onChange={props.onChange} />
        </div>
      </div>
      <br />

      <div className="row">
        <div className="col-md-6">
          <input className="form-control input" type="text" id="city" name="city" placeholder=" City.." required onChange={props.onChange} />
        </div>

        <div className="col-md-3">
          <select id="inputState" className="form-control input" onChange={props.onChange}>
            <option selected>Choose State</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="DC">District Of Columbia</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>

        </div>

        <div className="col-md-3">
          <input className="form-control input" type="text" id="city" name="city" placeholder=" Zip..." required onChange={props.onChange} />
        </div>
      </div><br />


      <div className="row">
        <div className="col-md-3">
          <input className="form-control input" type="text" id="price" name="price" placeholder=" Monthly Rent" required onChange={props.onChange} />
        </div>

        <div className="col-md-3">
          <input className="form-control input" type="text" id="sqf" name="sqf" placeholder=" Sq.Feet.." required onChange={props.onChange} />
        </div>

        <div className="col-md-3">
          <input className="form-control input" type="text" id="sqf" name="sqf" placeholder=" Rooms" required onChange={props.onChange} />
        </div>

        <div className="col-md-3">
          <div className="custom-file">
            <input type="file" className="custom-file-input" required onChange={props.onChange} />
            <label className="custom-file-label" for="validatedCustomFile">Choose file...</label>
          </div>
        </div>
        <br />
        <br />
        <br />


        <button id="sendmail" className="btn btn-primary btn-lg btn-block bt" onClick={props.onSubmit}>Submit</button>


      </div>
    </div>
  )
}


export default Form;
