import { useEffect, useReducer, useState } from "react"

export default function ParticipatedTeams()
{
    const[teams, setTeams] = useState([])
    const[tours, setTours] = useState([])

    var tmid = JSON.parse(localStorage.getItem("loggedTourMan")).uid;

    useEffect(() => {
        fetch("http://localhost:8082/getTourById?uid=" + tmid)
        .then(resp => resp.json())
        .then(obj => setTours(obj))
    },[])

    const showTeams = (tid) => {
        fetch("http://localhost:8082/getParticipatedTeams?tmid=" + tmid + "&tid=" + tid)
        .then(resp => resp.json())
        .then(obj => setTeams(obj))
    }

    

    return(
        <div>
            <div className="mb-3">
              <label>Tournament Name</label>
              <select
                className="form-control"
                id="tid"
                name="tid"
                onChange={(e) => {showTeams(e.target.value)}}>
                <option>Select Tournament</option>
                {
                  tours.map(tour => {
                    return <option value={tour.tournament_id}>{tour.tournament_title}</option> 
                  })
                }
              </select><br/>
            </div>
            {
                <div className="auth-wrapper">

                <div>
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-md-6 text-center mb-5">
    
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-12">
                                <h4 class="text-center mb-4">Teams</h4>
                                <div class="table-wrap">
                                    <table class="table">
                                        <thead class="thead-primary">
                                            <tr>
                                                <th>Team Name</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                teams.map(t => {
                                                    return <tr>
                                                        <td>{t.team_name}</td>   
                                                    </tr>
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}