import '../forms.css';
import {useReducer, useState, useEffect} from "react";

export default function GenerateMatchForm(){



  const [team,setTeam] = useState(null);
  useEffect(()=>{
   fetch("http://localhost:8082/getTeams")
   .then(resp => resp.json())
   .then(obj => {
     console.log(obj)
   })
  } ,[])

    const init = {
        team_id_a:"",
        team_id_b:"",
        match_venue:"",
        match_date:"",
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
        fetch("http://localhost:8082/generateMatches", reqOptions)
        .then(resp => console.log(resp))
    }


    return(

        <div className="auth-wrapper">
  <div className="auth-inner"> 
        <div>
          <form>
            <h3>Generate Match</h3>
            <div className="mb-3">
            {/* <select onChange={(e) => {dispatch({type:'update', fld:'team_id_b', val: team.team_id})}}>

                    <option>
                    </option> 
              </select> */}
            </div>
    
            <div className="mb-3">
              <label>Team 2 Id</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Title"
                id="team_id_b"
                name="team_id_b"
                value={info.team_id_b}
                onChange={(e) => {dispatch({type:'update', fld:'team_id_b', val: e.target.value})}}
              />
            </div>

            <div className="mb-3">
              <label>Match Venue</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Title"
                id="match_venue"
                name="match_venue"
                value={info.match_venue}
                onChange={(e) => {dispatch({type:'update', fld:'match_venue', val: e.target.value})}}
              />
            </div>
    
            <div className="mb-3">
              <label>Match Date</label>
              <input
                type="date"
                className="form-control"
                placeholder="Start Date"
                id="match_date"
                name="match_date"
                value={info.match_date}
                onChange={(e) => {dispatch({type:'update', fld:'match_date', val: e.target.value})}}
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
          </div>
        )
}