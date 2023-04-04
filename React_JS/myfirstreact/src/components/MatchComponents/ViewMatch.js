
import { useEffect, useState } from "react"

export default function ViewMatch() {
    const [tours, setTours] = useState([]);
    const [matches, setMatch] = useState([]);


    useEffect(() => {

        fetch("http://54.92.203.101:8082/getTournaments")
            .then((resp) => resp.json())
            .then((obj) => setTours(obj))
    }, [])

    const gettour = (uid) => {
        console.log(uid)
        fetch("http://54.92.203.101:8082/matchByTourId?tour=" + uid)
            .then((resp) => resp.json())
            .then((obj) => setMatch(obj))
    }

    return (
        <div>
            <br />
            <br />
            <div style={{ position: "absolute", top: "15%", left: "45%", opacity: "0.8" }} >
                <div className="col text-center dark ">
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
                    <div><br /></div>
                </div>
            </div>

            {
                matches.map(match => {

                    return (
                        <div>
                            <div className="card shadow" style={{ width: "60%", right: "-20%", top: "50px", animation: "ease-in-out", opacity: "0.9" }} >
                                <div className="card-body">
                                    <div className="row justify-content-between align-items-center">
                                        <div className="col-4 text-center">
                                            <h5>{match.team_id_a.team_name}</h5>
                                            <img src={match.team_id_a.team_logo} height="200px" width="200px" />
                                        </div>
                                        <div className="col-3 text-center">
                                            <h2>{match.match_date}</h2>

                                        </div>
                                        <div className="col-4 text-center">
                                            <h5>{match.team_id_b.team_name}</h5>
                                            <img src={match.team_id_b.team_logo} height="200px" width="200px" />
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-15 text-center">
                                            <h4>Venue: {match.match_venue}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br /><br />
                        </div>
                    )
                })}
        </div>

    )
}