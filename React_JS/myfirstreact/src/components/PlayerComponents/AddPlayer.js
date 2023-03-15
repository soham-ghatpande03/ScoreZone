import { useReducer , useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';

export default function AddPlayer() {
const [teamm,setTeam] = useState([]);
var tmid = JSON.parse(localStorage.getItem("loggedTeamMan")).uid;
console.log(tmid)

useEffect( (e) =>{
  fetch("http://localhost:8082/getTeamByTManId?uid="+tmid)
  .then(resp => resp.json())
  .then(obj => setTeam((obj)))
},[tmid])

var tt = teamm.team_id
var nav = useNavigate();

  const init = {
    fname: { value: "", error: "", valid: false, touched: false },
    lname: { value: "", error: "", valid: false, touched: false },
    position: { value: "", error: "", valid: false, touched: false },
    bdate: { value: "", error: "", valid: false, touched: false },
    team_id: "",
    goals: { value: "", error: "", valid: false, touched: false },
    status: 1,
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

      case 'fname':
        const exp1 = /[A-Za-z]{2,12}/
        if (!exp1.test(val)) {
          error = "Atleast 1 Capital Letter, 1 Small Letter";
        }
        else {
          error = "";
          valid = true;
        }
        break;

      case 'lname':
        const exp2 = /[A-Za-z]{2,12}/
        if (!exp2.test(val)) {
          error = "Atleast 1 Capital Letter, 1 Small Letter";
        }
        else {
          error = "";
          valid = true;
        }
        break;

      case 'bdate':
          error = "";
          valid = true;
        break;

      case 'position':
        const exp4 = /[A-Za-z]{2,12}/
        if (!exp4.test(val)) {
          error = "Invalid";
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
        fname: info.fname.value,
        lname: info.lname.value,
        position: info.position.value,
        bdate: info.bdate.value,
        goals: info.goals.value,
        team_id: tt,
        status : info.status.value
      })
    }

    fetch("http://localhost:8082/savePlayer", reqOptions)
    .then(resp => {
      if(resp.ok){
      alert('Player Added Successfully..!!')
      nav("/tem_home/viewteam")
      return resp.json()
    }
    else
    {
      alert('Error Occured...Might be team not created....Try again')
      window.location.reload(false)
    }})
  }

  return (

    <div className="card shadow text-center" style={{ width: "40%", right: "-30%", top: "50px", animation: "ease-in-out", opacity: "0.92", fontSize: "15px", fontFamily: "Century Gothic" }} >
      <div className="card-body">

        <form>
          <h3>Player Details</h3>

          <div className="mb-3">
            <label>First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter First Name"
              id="First_Name"
              name="First_Name"
              value={info.fname.value}
              onChange={(e) => { validate("fname", e.target.value) }}
            />
            <div
              id="emailHelp"
              className="form-text"
              style={{ display: (!info.fname.valid && info.fname.touched) ? "block" : "none" }}>
              {info.fname.error}
            </div>

          </div>

          <div className="mb-3">
            <label>Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Last Name"
              id="Last_Name"
              name="Last_Name"
              value={info.lname.value}
              onChange={(e) => { validate("lname", e.target.value) }} />
            <div
              id="emailHelp"
              className="form-text"
              style={{ display: (!info.fname.valid && info.fname.touched) ? "block" : "none" }}>
              {info.lname.error}
            </div>
          </div>

          <div className="mb-3">
            <label>Position</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Position"
              id="Position"
              name="Position"
              value={info.position.value}
              onChange={(e) => { validate("position", e.target.value) }} />
            <div
              id="emailHelp"
              className="form-text"
              style={{ display: (!info.position.valid && info.position.touched) ? "block" : "none" }}>
              {info.position.error}
            </div>
          </div>

          <div className="mb-3">
            <label>Birthdate</label>
            <input
              type="date"
              className="form-control"
              placeholder="Enter Birthdate"
              id="bdate"
              name="bdate"
              value={info.bdate.value}
              onChange={(e) => { validate("bdate", e.target.value) }} />
            <div
              id="emailHelp"
              className="form-text"
              style={{ display: (!info.bdate.valid && info.bdate.touched) ? "block" : "none" }}>
              {info.bdate.error}
            </div>
          </div>

          <div className="mb-3">
            <label>Goals</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Goals"
              id="goals"
              name="goals"
              value={info.goals.value}
              onChange={(e) => { validate("goals", e.target.value) }} />
          </div>

          <div className="d-grid">
            <button type="submit"
              disabled={info.fname.valid && info.lname.valid ? false : true}
              className="btn btn-primary" onClick={(e) => { sendData(e) }}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>

  )

}