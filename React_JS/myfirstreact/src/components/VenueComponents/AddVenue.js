import { useReducer , useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';

export default function AddVenue() {

var nav = useNavigate();

  const init = {
    venue_name: { value: "", error: "", valid: false, touched: false },
    venue_city: { value: "", error: "", valid: false, touched: false },
      
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'update':
        return { ...state, [action.fld]: { ...state[action.fld], value: action.value, error: action.error, valid: action.valid, touched: action.touched } }
      case 'reset':
        return init;
    }
  }

  const validate = (nm, val) => {
    console.log(nm + " : " + val)
    let error = "";
    let valid = false;
    let touched = true;
    switch (nm) {

      case 'venue_name':
        const exp1 = /[A-Za-z]{5,12}/
        if (!exp1.test(val)) {
          error = "Atleast 1 Capital Letter, 1 Small Letter";
        }
        else {
          error = "";
          valid = true;
        }
        break;

      case 'venue_city':
        const exp2 = /[A-Za-z]{3,12}/
        if (!exp2.test(val)) {
          error = "Atleast 1 Capital Letter, 1 Small Letter";
        }
        else {
          error = "";
          valid = true;
        }
        break;


    }
    console.log(val + "," + error + "," + valid)
    dispatch({ type: 'update', fld: nm, value: val, error, valid, touched })
  }

  const [info, dispatch] = useReducer(reducer, init)

  const sendData = (e) => {
    e.preventDefault();
    const reqOptions = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        venue_name: info.venue_name.value,
        venue_city: info.venue_city.value,
      })
    }

    fetch("http://54.243.238.129:8082/saveVenue", reqOptions)
      .then(resp => console.log(resp))
      .then(alert('Venue Added'))
      .then(nav("/admin_home"))
  }

  return (

    <div className="card shadow text-center" style={{ width: "40%", right: "-30%", top: "50px", animation: "ease-in-out", opacity: "0.92", fontSize: "15px", fontFamily: "Century Gothic" }} >
      <div className="card-body">

        <form>
          <h3>Venue Details</h3>

          <div className="mb-3">
            <label>Venue Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Venue Name"
              id="venue_name"
              name="venue_name"
              value={info.venue_name.value}
              onChange={(e) => { validate("venue_name", e.target.value) }}
            />
            <div
              id="emailHelp"
              className="form-text"
              style={{ display: (!info.venue_name.valid && info.venue_name.touched) ? "block" : "none" }}>
              {info.venue_name.error}
            </div>

          </div>

          <div className="mb-3">
            <label>City</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter City Name"
              id="venue_city"
              name="venue_city"
              value={info.venue_city.value}
              onChange={(e) => { validate("venue_city", e.target.value) }} />
            <div
              id="emailHelp"
              className="form-text"
              style={{ display: (!info.venue_city.valid && info.venue_city.touched) ? "block" : "none" }}>
              {info.venue_city.error}
            </div>
          </div>

          <div className="d-grid">
            <button type="submit"
              disabled={info.venue_city.valid && info.venue_name.valid ? false : true}
              className="btn btn-primary" onClick={(e) => { sendData(e) }}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>

  )

}