import { useReducer, useState, useEffect } from "react";

export default function MyTournaments()
{

    var tmid = JSON.parse(localStorage.getItem("loggedTourMan")).uid;
    const [tour, setTour] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8082/getTourById?uid="+tmid)
            .then(resp => resp.json())
            .then(obj => setTour(obj))
    }, [])


    return(
        <div>
            <div className="auth-wrapper">
            <div>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-6 text-center mb-5">

                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-12">
                            <h4 class="text-center mb-4">Your Tournaments</h4>
                            <div class="table-wrap">
                                <table class="table">
                                    <thead class="thead-primary">
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