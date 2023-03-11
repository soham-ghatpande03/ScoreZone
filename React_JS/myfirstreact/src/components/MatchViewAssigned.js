
import { useState, useEffect } from 'react'

export default function ViewMatchesMatchUpdator() {

  var uid = JSON.parse(localStorage.getItem("loggedMU")).uid;

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
    console.log(tourid)
  }

  const gettour = (uid) => {
    console.log(uid)
    fetch("http://localhost:8082/matchByTourId?tour=" + uid)
        .then((resp) => resp.json())
        .then((obj) => setMatch(obj))
}
gettour(tourid);
  
  return (

      matches.map(match => {

              return (
                  <div>
                      <div class="card shadow" style={{ width: "60%", right: "-20%", top: "10px" }} >
                          <div class="card-body">
                              <div class="row justify-content-between align-items-center">
                                  <div class="col-4 text-center">
                                      <h5>{match.team_id_a.team_name}</h5>
                                      <img src={match.team_id_a.team_logo} height="200px" width="200px" />
                                  </div>
                                  <div class="col-3 text-center">
                                      <h2>{match.match_date}</h2>
                                      
                                  </div>
                                  <div class="col-4 text-center">
                                      <h5>{match.team_id_b.team_name}</h5>
                                      <img src={match.team_id_b.team_logo} height="200px" width="200px" />
                                  </div>
                              </div>
                              <hr />
                              <div class="row">
                                  <div class="col-15 text-center">
                                      <h4>Venue: {match.match_venue}</h4>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <br /><br />
                  </div>
              )
          })
        
  )}