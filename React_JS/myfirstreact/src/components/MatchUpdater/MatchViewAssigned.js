
import { useState, useEffect } from 'react'

export default function ViewMatchesMatchUpdator() {

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

  
  return (
  <div>
  <div><h1>hiii</h1></div>
  
  <div>
    <table class="table">
      <thead class="thead-primary">
      <tr>
													<th>Tournament Manager ID</th>
													<th>Tournament Manager Name</th>
													<th>Email</th>
                          <th>Email</th>
					<th>UserName</th>
					<th colSpan="2" style={{ textAlign: "center" }}>Remark </th>
				</tr>
      </thead>
    </table>
  </div>
  
  
  </div>


  
  )}


  {/* {matches.map(match => {
  //   return (
  //     <div>
  //       <div class="card shadow" style={{ width: "60%", right: "-20%", top: "10px" }} >
  //         <div class="card-body">
  //           <div class="row justify-content-between align-items-center">
  //             <div class="col-4 text-center">
  //               <h5>{match.team_id_a.team_name}</h5>
  //               <img src={match.team_id_a.team_logo} height="200px" width="200px" />
  //             </div>
  //             <div class="col-3 text-center">
  //               <h2>{match.match_date}</h2>

  //             </div>
  //             <div class="col-4 text-center">
  //               <h5>{match.team_id_b.team_name}</h5>
  //               <img src={match.team_id_b.team_logo} height="200px" width="200px" />
  //             </div>
  //           </div>
  //           <hr />
  //           <div class="row">
  //             <div class="col-15 text-center">
  //               <h4>Venue: {match.match_venue}</h4>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //       <br /><br />
  //     </div>
  //   )
  // })}</div>)
        
  ) */}

