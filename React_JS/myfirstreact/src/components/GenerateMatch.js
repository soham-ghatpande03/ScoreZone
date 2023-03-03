import '../forms.css';
import {useReducer, useState, useEffect} from "react";

export default function GenerateMatchForm(){

  const tmanager = JSON.parse(localStorage.getItem("loggedTourMan"));
  console.log(tmanager.uid)
  const [tours,setTour] = useState([]);
  useEffect(()=>{
   fetch("http://localhost:8082/getTourById?uid="+tmanager.uid)
   .then(resp => resp.json())
   .then(obj => setTour(obj))
  } ,[])

  const [teams,setTeam] = useState([]);
  const[seleteam,setSelTeam] = useState([]);

  useEffect(()=>{
   fetch("http://localhost:8082/getTeams")
   .then(resp => resp.json())
   .then(obj => setTeam(obj))
  } ,[])
  
  useEffect(()=>{})

  const init = {
      tournament_id:"",
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
      fetch("http://localhost:8082/ ", reqOptions)
      .then(resp => console.log(resp))
  }


  return(
      <div>
        <div className="auth-wrapper">
      <div className="auth-inner">
        <form>
          <h3>Generate Match</h3>
          <div className="mb-3">
            <label>Tournament Name</label>
            <select 
            className="form-control" 
            id="tournament_id"
            name="tournament_id"
            onChange={(e) => {dispatch({type:'update', fld:'tournament_id', val: e.target.value})}}>
            <option>Select Tournament</option>
            {
              
              tours.map(tour => {
                return <option value={tour.tournament_id}>{tour.tournament_title}</option>
            })
            }
          </select>
          </div>


          <div className="mb-3">
            <label>Select Team A</label>
            <select 
            className="form-control" 
            id="team_id_a"
            name="team_id_a"
            onChange={(e) => {dispatch({type:'update', fld:'team_id_a', val: e.target.value})}}>
              <option>Select Team A</option>
            {
              teams.map(team => {
                return <option value={team.team_id}> {team.team_name} </option>
            })
            }
          </select>
            </div>
      
            <div className="mb-3">
            <label>Select Team B</label>
            <select 
            className="form-control" 
            id="team_id_b"
            name="team_id_b"
            onChange={(e) => {dispatch({type:'update', fld:'team_id_b', val: e.target.value})}}>
              <option>Select Team B</option>
            {
              teams.map(team => {
                return <option value={team.team_id}> {team.team_name} </option>
            })
            }
          </select>
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
        <p>{JSON.stringify(info)}</p>
        </div>
        </div>
        </div>
      )
}