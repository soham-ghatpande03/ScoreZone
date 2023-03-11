
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
export default function ViewMatchesMatchUpdator() {
 var nav= useNavigate();
  var uid = JSON.parse(localStorage.getItem("loggeduser")).uid;

  const [tid, setTid] = useState([]);
  const [matches, setMatch] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8082/getMatchesByMuId?mu_id=" + uid)
      .then(resp => resp.json())
      .then(obj => setTid(obj))
  }, [])

  let tourid = '';
  if (tid.length > 0) {
    tourid = Object.values(tid)[0].tournament_id;
  }

  useEffect(() => {
    console.log(tourid)
    fetch("http://localhost:8082/matchByTourId?tour=" + tourid)
      .then((resp) => resp.json())
      .then((obj) => setMatch(obj))
  }, [tourid])

  //
  const startMatch = (matchid) => {
    window.alert("clicked")
		console.log(matchid)
    if(matchid>0){
    localStorage.setItem("MatchId", JSON.stringify(matchid))
    window.alert("match id:"+matchid)
    nav("/mu_home/updatescore")
  }
 }

  //

  
  return (
  <div>
  
  <div>
  <table class="table">
            <thead class="thead-dark">
               <tr>
                 <th scope="col">Match Number</th>
                 <th scope="col">Team A</th>
                 <th scope="col">Team B</th>
                 <th scope="col">Venue</th>
                 <th scope="col">Date</th>
                 <th scope="col">Action</th>
              </tr>
             </thead>
             <tbody>
               {
              matches && matches.length > 0 && matches.map(match => {
                return (
                  <tr key={match.match_id}>
                    <td>{match.match_id}</td>
                    <td>{match.team_id_a.team_name}</td>
                    <td>{match.team_id_b.team_name}</td>
                    <td>{match.match_venue}</td>
                    <td>{match.match_date}</td>
                    <td><button onClick={() => { startMatch(match.match_id) }}  className="btn btn-primary">Start Match</button></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
  </div>
  
  
  </div>


  
  )}

///


// import { useState,useEffect } from 'react'
// import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom'

// export default function ViewMatchesMatchUpdator() {

//     var uid = JSON.parse(localStorage.getItem("loggeduser")).uid;

//     const [tid,setTid] = useState([]);
//     const[matches,setMatch] = useState([]);

//     useEffect(()=>{
//       fetch("http://localhost:8082/getMatchesByMuId?mu_id="+uid)
//       .then(resp => resp.json())
//       .then(obj => setTid(obj))
//       },[])

//     let tourid = '';
//       if (tid.length > 0) {
//         tourid = Object.values(tid)[0].tournament_id;
//       }

//     useEffect(()=>{
//       console.log(tourid)
//       fetch("http://localhost:8082/matchByTourId?tour="+tourid)
//       .then((resp)=>resp.json())
//       .then ((obj) => setMatch(obj))
//       },[tourid])

//       let fmatch = '';
//       if (matches.length > 0) {
//         fmatch = Object.values(matches)[1].match_id;
//       }


//       return(
//         <div>
//         <div>
//           <table class="table">
//             <thead class="thead-dark">
//               <tr>
//                 <th scope="col">Match Number</th>
//                 <th scope="col">Team A</th>
//                 <th scope="col">Team B</th>
//                 <th scope="col">Venue</th>
//                 <th scope="col">Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {
//               matches && matches.length > 0 && matches.map(match => {
//                 return (
//                   <tr key={match.match_id}>
//                     <td>{match.match_id}</td>
//                     <td>{match.team_id_a.team_name}</td>
//                     <td>{match.team_id_b.team_name}</td>
//                     <td>{match.match_venue}</td>
//                     <td>{match.match_date}</td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//           <nav className="navbar navbar-expand-lg navbar-light fixed-top">
//             <div className="container">
//               <Link className="navbar-brand" to={'/'}>
//                   ScoreZone
//               </Link>
//               <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
//                 <ul className="navbar-nav ml-auto">
//                   <li className="nav-item">
//                     <Link className="nav-link" to={'/mu_home'}>
//                       Match Updator Home
//                     </Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="nav-link" to={'/logout'}>
//                       Logout
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </nav>
//         </div>     
//       )
//     }

  

