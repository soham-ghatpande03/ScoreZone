import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function ParticipatedTeams(){

    var uid = JSON.parse(localStorage.getItem("loggeduser")).uid;

    const [tours, setTours] = useState([]);
    const [teamss, setTeamss] = useState([]);


    useEffect(() => {
        fetch("http://localhost:8082/getTourById?uid="+uid)
            .then((resp) => resp.json())
            .then((obj) => setTours(obj))
    }, [])

    const gettour = (uid1) => {
        console.log(uid)
        fetch("http://localhost:8082/TeamsByTourId?tid="+ uid1)
            .then((resp) => resp.json())
            .then((obj) => setTeamss(obj))
    }
    console.log(teamss)

    return (
        <div className="card shadow text-center" style={{ width: "40%", right: "-30%", top: "3%", animation: "ease-in-out", opacity: "0.92", fontSize: "15px", fontFamily: "Century Gothic" }} >
        <div className="card-body">
                    <select
                        className="form-control text-center"
                        onChange={(e) => gettour(e.target.value)}>
                        <option
                            style={{ position: "absolute", top: "15%", left: "45%", opacity: "0.9" }}
                        >Select A Tournament</option>
                        {
                            tours.map(tour => {
                                return <option value={tour.tournament_id}>
                                    {tour.tournament_title}
                                </option>

                            })
                        }
                        </select>
			{
				teamss.map(team => {
					return <div>
                    <div className="row justify-content-between align-items-center">
									<div className="col-12 text-center">
										<a href="#">
											<h5>{team.team_id.team_name}</h5>
											<img src={team.team_id.team_logo} height="200px" width="200px" />
										</a>
                                       
									</div>
                                    
						</div>
                        <br /><br />
                        </div>
						
					

				})
			}

		</div>
        </div>
	)
}

