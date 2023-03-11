
import { useReducer } from "react";
import { format, isAfter } from 'date-fns'

export default function Tournamentform() {

  const date = new Date();
  const tmanager = JSON.parse(localStorage.getItem("loggedTourMan"));

  const init = {
    tournament_title: { value: "", error: "", valid: false, touched: false },
    tournament_manager_id: { value: tmanager.uid, error: "", valid: false, touched: true },
    start_date: { value: "", error: "", valid: false, touched: true },
    end_date: { value: "", error: "", valid: false, touched: false },
    participation_deadline: { value: "", error: "", valid: false, touched: false },
    tournament_type: { value: "", error: "", valid: false, touched: false }
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
    let tarDate;
    let tarDate1;
    console.log(nm + " : " + val)
    let error = "";
    let valid = false;
    let touched = true;
    switch (nm) {
      case 'tournament_title':
        const exp1 = /^[A-Za-z0-9]{5,12}$/
        if (!exp1.test(val)) {
          error = "Atleast 1 Capital Letter, 1 Small Letter , No Special Characters";
        }
        else {
          error = "";
          valid = true;
        }
        break;

      case 'start_date':
        tarDate = new Date(val)
        //if(info.start_date.value<date)
        if (date.getFullYear() >= tarDate.getFullYear() && date.getMonth() >= tarDate.getMonth() && date.getDate() >= tarDate.getDate()) {
          console.log(val)
          error = "Tournament Start Date Should Not Be Before Current Date";
        }
        else {
          error = "";
          valid = true;
        }
        break;

      case 'end_date':
        tarDate = new Date(val);
        tarDate1 = new Date(info.start_date.value)
        if (tarDate1.getFullYear() >= tarDate.getFullYear() && tarDate1.getMonth() >= tarDate.getMonth() && tarDate1.getDate() >= tarDate.getDate()) {
          error = "Tournament End Date Should Not Be Before Tournament Start Date";
        }
        else {
          error = "";
          valid = true;
        }
        break;

      case 'participation_deadline':
        tarDate = new Date(val);
        tarDate1 = new Date(info.start_date.value)
        if (tarDate1.getFullYear() <= tarDate.getFullYear() && tarDate1.getMonth() <= tarDate.getMonth() && tarDate1.getDate() <= tarDate.getDate()) {
          error = "Deadline Cannot Be After Tourament Start Date";
        }
        else {
          error = "";
          valid = true;
        }
        break;

      case 'tournament_type':
        error = "";
        valid = true;

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
      body: JSON.stringify(
        {
          tournament_title: info.tournament_title.value,
          tournament_manager_id: info.tournament_manager_id.value,
          start_date: info.start_date.value,
          end_date: info.end_date.value,
          participation_deadline: info.participation_deadline.value,
          tournament_type: info.tournament_type.value
        })
    }
    fetch("http://localhost:8082/createTournament", reqOptions)
      .then(resp => console.log(resp))
      .then(alert('You have Sucessfully Created the Tournament'))
      .then(window.location.reload(false))
  }

  return (

    <div className="card shadow text-center" style={{ width: "40%", right: "-30%", top: "3%", animation: "ease-in-out", opacity: "0.92", fontSize: "15px", fontFamily: "Century Gothic" }} >
      <div className="card-body">
        <form action="/">
          <h3>Create Tournament</h3>
          <div className="mb-3">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Title"
              id="title"
              name="title"
              value={info.tournament_title.value}
              onChange={(e) => { validate("tournament_title", e.target.value) }}
            />
            <div
              id="emailHelp"
              className="form-text"
              style={{ display: (!info.tournament_title.valid && info.tournament_title.touched) ? "block" : "none" }}>
              {info.tournament_title.error}
            </div>
          </div>

          <div className="mb-3">
            <label>Start Date</label>
            <input
              type="date"
              className="form-control"
              placeholder="Start Date"
              id="Start_Date"
              name="Start_Date"
              value={info.start_date.value}
              onChange={(e) => { validate("start_date", e.target.value) }}
            />
            <div
              id="emailHelp"
              className="form-text"
              style={{ display: (!info.start_date.valid && info.start_date.touched) ? "block" : "none" }}>
              {info.start_date.error}
            </div>
          </div>

          <div className="mb-3">
            <label>End Date</label>
            <input
              type="date"
              className="form-control"
              placeholder="End Date"
              id="End_Date"
              name="End_Date"
              disabled={!info.start_date.value}
              value={info.end_date.value}
              onChange={(e) => { validate("end_date", e.target.value) }}
            />
            <div
              id="emailHelp"
              className="form-text"
              style={{ display: (!info.end_date.valid && info.end_date.touched) ? "block" : "none" }}>
              {info.end_date.error}
            </div>
          </div>

          <div className="mb-3">
            <label>Deadline Date</label>
            <input
              type="date"
              className="form-control"
              placeholder="Deadline Date"
              id="Deadline_Date"
              name="Deadline_Date"
              disabled={!info.start_date.value || !info.end_date.value}
              value={info.participation_deadline.value}
              onChange={(e) => { validate("participation_deadline", e.target.value) }}
            />
            <div
              id="emailHelp"
              className="form-text"
              style={{ display: (!info.participation_deadline.valid && info.participation_deadline.touched) ? "block" : "none" }}>
              {info.participation_deadline.error}
            </div>
          </div>

          <div className="mb-3">
            <label>Tournament Type</label>
            <select
              className="form-control"
              id="tournament_type"
              name="tournament_type"
              value={info.tournament_type.value}
              onChange={(e) => { validate("tournament_type", e.target.value) }}>

              <option>Select Tournament Type</option>
              <option value={0}>Round Robin</option>
              <option value={1}>Group Stage</option>

            </select>
          </div>

          <div className="d-grid">
            <button type="submit"
              disabled={info.start_date.valid && info.tournament_title.valid && info.end_date.valid && info.participation_deadline.valid && info.tournament_type.valid ? false : true}
              className="btn btn-primary" onClick={(e) => { sendData(e) }}>
              Submit
            </button>
          </div>
        </form>
      </div>
      <div> { }</div>

    </div>

  )

}