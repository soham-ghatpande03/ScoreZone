import { useReducer, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

var AddTeam = () => {

    var tmid = JSON.parse(localStorage.getItem("loggedTeamMan")).uid;
    const nav = useNavigate();
    const participate = (t) => {
        fetch("http://localhost:8082/addTeam?teamid=" + teamid.team_id + "&tourid=" + t.tournament_id)
            .then(resp => resp.json())
            .then(obj => {
                console.log(JSON.stringify(obj))
                if (obj) {
                    alert("Team Added")
                    nav("/tem_home/participate")
                    window.location.reload();
                }
                else
                    alert("Participation Failed")

            })
    }

    const [tour, setTour] = useState([]);
    const [teamid, setTeamId] = useState();
    useEffect(() => {
        fetch("http://localhost:8082/getTournaments")
            .then(resp => resp.json())
            .then(obj => setTour(obj))
    }, [])

    useEffect(() => {
        fetch("http://localhost:8082/getTeamByTManId?uid=" + tmid )
            .then(resp => resp.json())
            .then(obj => setTeamId(obj))
    }, [])

    return (
        <div className="auth-wrapper">

            <div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-6 text-center mb-5">

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <h4 class="text-center mb-4">List of Tournaments </h4>
                            <div class="table-wrap">
                                <table class="table">
                                    <thead class="thead-primary">
                                        <tr>
                                            <th>Tournament Title</th>
                                            <th>Start Date</th>
                                            <th>End Date</th>
                                            <th>Participation Deadline Date</th>
                                            <th colSpan="2" align="center">Participate</th>
                                        </tr>

                                    </thead>
                                    <tbody>
                                        {
                                            tour.map(t => {
                                                return <tr><td>{t.tournament_title}</td>
                                                    <td>{t.start_date}</td>
                                                    <td>{t.end_date}</td>
                                                    <td>{t.participation_deadline}</td>
                                                    <td><button onClick={() => { participate(t) }} class="btn btn-primary">Add Team</button></td>
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

    )
}

export { AddTeam };