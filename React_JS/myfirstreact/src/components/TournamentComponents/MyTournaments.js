import { useReducer, useState, useEffect } from "react";

export default function MyTournaments() {

    var tmid = JSON.parse(localStorage.getItem("loggedTourMan")).uid;
    const [tour, setTour] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8082/getTourById?uid=" + tmid)
            .then(resp => resp.json())
            .then(obj => setTour(obj))
    }, [])


    return (
        <div className="card shadow text-center" style={{ width: "40%", right: "-30%", top: "3%", animation: "ease-in-out", opacity: "0.92", fontSize: "15px", fontFamily: "Century Gothic" }} >
            <div className="card-body">
                <div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6 text-center mb-5">

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <h4 className="text-center mb-4">My Tournaments</h4>
                                <div className="table-wrap">
                                    <table className="table table-striped table-hover">
                                        <thead className="thead-primary">
                                            <tr>
                                                <th>Tournament Title</th>
                                                <th>Start Date</th>
                                                <th>End Date</th>
                                            </tr>

                                        </thead>
                                        <tbody>
                                            {
                                                tour.map(t => {
                                                    return <tr><td>{t.tournament_title}</td>
                                                        <td>{t.start_date}</td>
                                                        <td>{t.end_date}</td>
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