// import {useReducer, useState, useEffect} from "react";

// export default function GenerateMatch()
// {
//   const tmanager = JSON.parse(localStorage.getItem("loggedTourMan"));
//   console.log(tmanager.uid)
//   const [tours,setTour] = useState([]);

//   useEffect(()=>{
//    fetch("http://localhost:8082/getTourById?uid="+tmanager.uid)
//    .then(resp => resp.json())
//    .then(obj => setTour(obj))
//   },[])

//   useEffect(()=>{
//     fetch("http://localhost:8082/getTeamsByMatchStatus")
//     .then(resp => resp.json())
//     .then(obj => setTeam(obj))
//    } ,[])

//   const [teams,setTeam] = useState([]);

//   const init = 
//   {
//       tournament_id:{value:"",error:"",valid:false, touched:false}, 
//       team_id_a:{value:"",error:"",valid:false, touched:false},
//       team_id_b:{value:"",error:"",valid:false, touched:false},
//       match_venue:{value:"",error:"",valid:false, touched:false},
//       match_date:{value:"",error:"",valid:false, touched:false},
//       match_status:0
//   }

//   const reducer = (state, action) => {
//     switch(action.type)
//     {
//         case 'update':
//              return {...state , [action.fld]: {  ...state[action.fld],value: action.value, error: action.error, valid: action.valid, touched: action.touched}}
//         case 'reset' :
//              return init;
//     }
//   }

//   const [info, dispatch] = useReducer(reducer, init)


//   const sendData = (e) => {
//     e.preventDefault();
//     const reqOptions = {
//         method: 'POST',
//         headers: {'content-type':'application/json'},
//         body: JSON.stringify({
//           tournament_id: info.tournament_id.value,
//           team_id_a:  info.team_id_a.value,         
//           team_id_b : info.team_id_b.value,
//           match_date : info.match_date.value,
//           match_venue : info.match_venue.value,
//           match_status : info.match_status.value,
//         })
//       }

// fetch("http://localhost:8082/saveMatch ",reqOptions)
// .then(resp => console.log(resp))
// .then(alert('You have Sucessfully Generate a Match'))
// .then(window.location.reload(false))
// }


// const changeStatus= () => {
//   fetch("http://localhost:8082/changeTeamMatchStatus?t1="+info.team_id_a+"&t2="+info.team_id_b)
//   .then(resp => console.log(resp))
// }

//     const validate = (nm,val) => 
//     {
//       console.log(nm+ " : "+val)
//        let error = "";
//        let valid = false;
//        let touched = true;
//        switch(nm)
//        {
//            case 'tournament_id' :
//                 if(info.tournament_id.value === 0)
//                 {
//                    error = "Select 1 option";                    
//                 }
//                 else
//                 {
//                    error ="";
//                    valid = true;
//                 }
//                 break;
//                 case 'team_id_a' :

//                 if(info.team_id_a.value === 0)
//                 {
//                    error = "Select 1 option";                    
//                 }
//                 else
//                 {
//                    error ="";
//                    valid = true;
//                 }
//                 break;

//                 case 'team_id_b' :

//                 if(info.team_id_b.value === 0)
//                 {
//                    error = "Select 1 option";                    
//                 }
//                 else
//                 {
//                    error ="";
//                    valid = true;
//                 }
//                 break;

//                 case 'match_venue' :

//                 if(info.match_venue.value === 0)
//                 {
//                    error = "Select 1 option";                    
//                 }
//                 else
//                 {
//                    error ="";
//                    valid = true;
//                 }
//                 break;

//                 case 'match_date' :

//                 if(info.match_date.value === 0)
//                 {
//                    error = "Select Match Date";                    
//                 }
//                 else
//                 {
//                    error ="";
//                    valid = true;
//                 }
//                 break;

//             }
//             console.log(val+","+error+","+valid)
//             dispatch({type: 'update', fld: nm,value: val,error, valid, touched})
//           }

//   return(
//       <div>
//         <div className="auth-wrapper">
//       <div className="auth-inner">
//         <form>
//           <h3>Generate Match</h3>
//           <div className="mb-3">
//             <label>Tournament Name</label>
//             <select 
//             className="form-control" 
//             id="tournament_id"
//             name="tournament_id"
//             value={info.tournament_id.value}
//             onChange={(e)=>{validate("tournament_id", e.target.value)}}>
//             <option>Select Tournament</option>
//             {  tours.map(tour => {
//                 return <option value={tour.tournament_id}>{tour.tournament_title}</option>
//             })
//             }
//           </select>
//           <div 
//                     id="emailHelp"
//                      className="form-text" 
//                      style={{display: (!info.tournament_id.valid && info.tournament_id.touched)?"block":"none"}}>
//                     {info.tournament_id.error}
//                     </div>
//           </div>

//           <div className="mb-3">
//             <label>Select Team A</label>
//             <select 
//             className="form-control" 
//             id="team_id_a"
//             name="team_id_a"
//             value={info.team_id_a.value}
//             onChange={(e)=>{validate("team_id_a", e.target.value)}}>
//               <option>Select Team A</option>
//             {
//               teams.map(team => {
//                 return <option value={team.team_id}> {team.team_name} </option>
//             })
//             }
//           </select>
//           <div 
//                     id="emailHelp"
//                      className="form-text" 
//                      style={{display: (!info.team_id_a.valid&&info.team_id_a.touched)?"block":"none"}}>
//                     {info.team_id_a.error}
//                     </div>
//             </div>

//             <div className="mb-3">
//             <label>Select Team B</label>
//             <select 
//             className="form-control" 
//             id="team_id_b"
//             name="team_id_b"
//             value={info.team_id_b.value}
//             onChange={(e)=>{validate("team_id_b", e.target.value)}}>
//               <option>Select Team B</option>
//               {
//               teams.map(team => {
//                // {console.log(info.team_id_a+" / "+ team.team_id)}
//                 return ( (info.team_id_a!==team.team_id) && <option value={team.team_id}>{team.team_name} </option>)
//             })
//             }
//           </select>
//           <div 
//                     id="emailHelp"
//                      className="form-text" 
//                      style={{display: (!info.team_id_b.valid&&info.team_id_b.touched)?"block":"none"}}>
//                     {info.team_id_b.error}
//                     </div>
//             </div>

//           <div className="mb-3">
//             <label>Match Venue</label>
//             <select 
//               className="form-control"
//               id="match_venue"
//               name="match_venue"
//               value={info.match_venue.value}
//               onChange={(e)=>{validate("match_venue", e.target.value)}}>

//               <option>Select A Match Venue</option>
//               <option value="Pune District Football Association Stadium">Pune District Football Association Stadium</option>
//               <option value="Pune FC Training Ground">Pune FC Training Ground</option>
//               <option value="Shree Shiv Chhatrapati Sports Complex, Pune">Pune District Football Association Stadium</option>
//               <option value="Cooperage Football Stadium, Mumbai">Cooperage Football Stadium, Mumbai</option>
//               <option value="Fr. Agnel Stadium, Navi Mumbai">Fr. Agnel Stadium, Navi Mumbai</option>
//               <option value="DY Patil Stadium, Navi Mumbai">DY Patil Stadium, Navi Mumbai</option>
//               </select>
//               <div 
//                     id="emailHelp"
//                      className="form-text" 
//                      style={{display: (!info.match_venue.valid&&info.match_venue.touched)?"block":"none"}}>
//                     {info.match_venue.error}
//                     </div>
//           </div>

//           <div className="mb-3">
//             <label>Match Date</label>
//             <input
//               type="date"
//               className="form-control"
//               placeholder="Start Date"
//               id="match_date"
//               name="match_date"
//               value={info.match_date.value}
//               onChange={(e)=>{validate("match_date", e.target.value)}}/>
//                   <div 
//                     id="emailHelp"
//                      className="form-text" 
//                      style={{display: (!info.match_date.valid&&info.match_date.touched)?"block":"none"}}>
//                     {info.match_date.error}
//                     </div>
//           </div>
//           <div className="d-grid">
//             <button type="submit" 
//             disabled={info.tournament_id.valid && info.team_id_a.valid && info.team_id_b.valid && info.match_date.valid && info.match_venue.valid ? false : true} 
//             className="btn btn-primary" onClick={(e) => {
//               changeStatus()
//               sendData(e)
//             }
//           }>
//               Submit
//             </button>
//           </div>
//         </form>
//         </div>
//         <p>{JSON.stringify(info)}</p>  
//         </div>

//         </div>
//       )
// }


import { useReducer, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function GenerateMatch() {

  const nav = useNavigate();
  const tmanager = JSON.parse(localStorage.getItem("loggedTourMan"));
  console.log(tmanager.uid)
  const [tours, setTour] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8082/getTourById?uid=" + tmanager.uid)
      .then(resp => resp.json())
      .then(obj => setTour(obj))
  }, [])

  const [teams, setTeam] = useState([]);

  const selGroup = (selvalue) => {
    fetch("http://localhost:8082/getTeamsByMatchStatus?status=" + selvalue)
      .then(resp => resp.json())
      .then(obj => setTeam(obj))
  }

  useEffect(() => { })

  const init = {
    tournament_id: "",
    team_id_a: "",
    team_id_b: "",
    match_venue: "",
    match_date: "",
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case 'update':
        return { ...state, [action.fld]: action.val }
      case 'reset':
        return init;
    }
  }

  const [info, dispatch] = useReducer(reducer, init)

  const sendData = (e) => {
    e.preventDefault();
    const reqOptions = {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(info)
    }
    fetch("http://localhost:8082/saveMatch ", reqOptions)
      .then(resp => {
        if(resp.ok){
        alert('Match Generated Successfully!!')
        nav("/tm_home")
        return resp.json()
      }
      else
      {
        alert('Error Occured...Try Again')
        window.location.reload(false)
      }})
  }

  const changeStatus = () => {
    fetch("http://localhost:8082/changeTeamMatchStatus?t1=" + info.team_id_a + "&t2=" + info.team_id_b)
      .then(resp => console.log(resp))
  }

  return (

    <div className="card shadow text-center" style={{ width: "40%", right: "-30%", top: "3%", animation: "ease-in-out", opacity: "0.92", fontSize: "15px", fontFamily: "Century Gothic" }} >
      <div className="card-body">
        <form>

          <h3>Generate Match</h3>
          <br/>
          <div className="mb-3">
            <label>Tournament Name</label>
            <select
              className="form-control"
              id="tournament_id"
              name="tournament_id"
              onChange={(e) => { dispatch({ type: 'update', fld: 'tournament_id', val: e.target.value }) }}>
              <option>Select Tournament</option>
              {

                tours.map(tour => {
                  return <option value={tour.tournament_id}>{tour.tournament_title}</option>
                })
              }
            </select>
          </div>

          <div className="mb-3">
            <label>Team Match Status</label>
            <select
              className="form-control"
              onChange={(e) => { selGroup(e.target.value) }}>
              <option>Select Team Status</option>
              <option value={0}>Group Stage</option>
              <option value={1}>Quater Finals</option>
              <option value={2}>Semi Finals</option>
              <option value={3}>Finals</option>
            </select>
          </div>

          <div className="mb-3">
            <label>Select Team A</label>
            <select
              className="form-control"
              id="team_id_a"
              name="team_id_a"
              onChange={(e) => { dispatch({ type: 'update', fld: 'team_id_a', val: e.target.value }) }}>
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
              onChange={(e) => { dispatch({ type: 'update', fld: 'team_id_b', val: e.target.value }) }}>
              <option>Select Team B</option>
              {
                teams.map(team => {
                  { console.log(info.team_id_a + " / " + team.team_id) }
                  return ((info.team_id_a != team.team_id) && <option value={team.team_id}> {team.team_name} </option>)
                })
              }
            </select>
          </div>

          <div className="mb-3">
            <label>Match Venue</label>
            <select
              className="form-control"
              id="match_venue"
              name="match_venue"
              value={info.match_venue.value}
              onChange={(e) => { dispatch({ type: 'update', fld: 'match_venue', val: e.target.value }) }}>

              <option>Select A Match Venue</option>
              <option value="Pune District Football Association Stadium">Pune District Football Association Stadium</option>
              <option value="Pune FC Training Ground">Pune FC Training Ground</option>
              <option value="Shree Shiv Chhatrapati Sports Complex, Pune">Pune District Football Association Stadium</option>
              <option value="Cooperage Football Stadium, Mumbai">Cooperage Football Stadium, Mumbai</option>
              <option value="Fr. Agnel Stadium, Navi Mumbai">Fr. Agnel Stadium, Navi Mumbai</option>
              <option value="DY Patil Stadium, Navi Mumbai">DY Patil Stadium, Navi Mumbai</option>
            </select>
          </div>

          <div className="mb-3">
            <label>Match Date & Time</label>
            <input
              type="datetime-local"
              className="form-control"
              placeholder="Start Date"
              id="match_date"
              name="match_date"
              value={info.match_date}
              onChange={(e) => { dispatch({ type: 'update', fld: 'match_date', val: e.target.value }) }}
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary" onClick={(e) => {
              changeStatus()
              sendData(e)
            }
            }>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}