import { useState, useEffect } from "react";
export default function AllPlayers() {
    var x = 0;
    const [players, setPlayer] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8082/allPlayers")
            .then(resp => resp.json())
            .then(obj => setPlayer(obj))
    }, [])

    return (

        <div className="card shadow"
            style={{ width: "50%", right: "-25%", top: "50px", animation: "ease-in-out", opacity: "0.9" }} >
            <div className="card-body">
                <div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6 text-center mb-5">

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <h4 className="text-center mb-4">Player Database</h4>
                                <div className="table-wrap">
                                    <table className="table table-striped table-hover">
                                        <thead className="thead-primary">
                                            <tr>
                                                <th>Sr No.</th>
                                                <th>Player Name</th>
                                                <th>Player Position</th>
                                                <th>Goals</th>
                                            </tr>

                                        </thead>
                                        <tbody>
                                            {
                                                players.map(ut => {

                                                    return <tr>
                                                        <td>{++x}</td>
                                                        <td>{ut.first_name} {ut.last_name}</td>
                                                        <td>{ut.player_position}</td>
                                                        <td>{ut.goals}</td>
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
        </div>


    )
}