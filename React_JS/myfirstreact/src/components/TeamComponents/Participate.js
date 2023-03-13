import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

var AddTeam = () => {

    var tmid = JSON.parse(localStorage.getItem("loggedTeamMan")).uid;

    const nav = useNavigate();
    const participate = (t) => {
        fetch("http://localhost:8082/addTeam?teamid=" + teamid.team_id + "&tourid=" + t.tournament_id)
        .then(resp => {
            if(resp.ok===true){
            alert('Team Added In Tournament')
            nav("/tem_home")
            return resp.json()
          }
          else
          {
            alert('Team already Added...OR..Server Error')
            window.location.reload(false)
          }
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
        fetch("http://localhost:8082/getTeamByTManId?uid=" + tmid)
            .then(resp => resp.json())
            .then(obj => setTeamId(obj))
    }, [])

    return (
        <div className="card shadow text-center" style={{ width: "60%", right: "-20%", top: "4%", animation: "ease-in-out", opacity: "0.92", fontSize: "15px", fontFamily: "Century Gothic" }} >
            <div className="card-body">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6 text-center mb-5">

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="text-center mb-4">List of Tournaments </h4>
                            <div className="table-wrap">
                                <table className="table">
                                    <thead className="thead-primary">
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
                                                let flag = new Date() < new Date(t.participation_deadline);
                                                return <tr><td>{t.tournament_title}</td>
                                                    <td>{t.start_date}</td>
                                                    <td>{t.end_date}</td>
                                                    <td>{t.participation_deadline}</td>

                                                    <td><button disabled={flag ? false : true}

                                                        onClick={() => { participate(t) }} className="btn btn-primary">Participate</button></td>
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