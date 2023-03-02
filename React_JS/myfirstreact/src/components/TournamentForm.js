import '../forms.css';
import { useReducer ,useEffect, useState} from "react";


export default function Tournamentform(){

  const [tm,setTm] = useState(null);
  const tmanager = JSON.parse(localStorage.getItem("loggedTourMan"));

    const init = {      
        tournament_title:"",
        tournament_manager_id:"",
        start_date:"",
        end_date:"",
        participation_deadline:""
    }

    const reducer = (state, action) => {
        switch(action.type)
        {
            case 'update' :
                return {...state , [action.fld]:action.val}
            case 'reset' :
                return init;
        }
    }

    const [info, dispatch] = useReducer(reducer, init)

    const sendData = (e) => {
        e.preventDefault();
        const reqOptions = {
            method: 'POST',
            headers: {'content-type':'application/json'},
            body: JSON.stringify(info)
        }
        fetch("http://localhost:8082/createTournament", reqOptions)
        .then(resp => console.log(resp))
    }

return(
  
  <div className="auth-wrapper">
  <div className="auth-inner"> 
      <form>
        <h3>Create Tournament</h3>
        <div className="mb-3">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Title"
            id="title"
            name="title"
            value={info.tournament_title}
            onChange={(e) => {dispatch({type:'update', fld:'tournament_title', val: e.target.value})}}
          />
        </div>

        <div className="mb-3">
          <label>ManagerId</label>
          <input
            type="number"
            className="form-control"
            placeholder={tmanager.uid}
            id="ManagerId"
            name="ManagerId"
            value={info.tournament_manager_id}
            readOnly
            onChange={(e) => {dispatch({type:'update', fld:'tournament_manager_id', val: e.target.value})}}
          />
        </div>

        <div className="mb-3">
          <label>Start Date</label>
          <input
            type="date"
            className="form-control"
            placeholder="Start Date"
            id="Start_Date"
            name="Start_Date"
            value={info.start_date}
            onChange={(e) => {dispatch({type:'update', fld:'start_date', val: e.target.value})}}
          />
        </div>

        <div className="mb-3">
          <label>End Date</label>
          <input
            type="date"
            className="form-control"
            placeholder="End Date"
            id="End_Date"
            name="End_Date"
            value={info.end_date}
            onChange={(e) => {dispatch({type:'update', fld:'end_date', val: e.target.value})}}
          />
        </div>

        <div className="mb-3">
          <label>Deadline Date</label>
          <input
            type="date"
            className="form-control"
            placeholder="Deadline Date"
            id="Deadline_Date"
            name="Deadline_Date"
            value={info.participation_deadline}
            onChange={(e) => {dispatch({type:'update', fld:'participation_deadline', val: e.target.value})}}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={(e) => {sendData(e)}}>
            Submit
          </button>
        </div>
      </form>
      </div>
      </div>

)

}