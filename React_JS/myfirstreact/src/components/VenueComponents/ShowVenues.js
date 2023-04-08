import { useState, useEffect } from "react";
export default function ShowVenues() {
    var x = 0;
    const [venues, setVenue] = useState([]);
    useEffect(() => {
        fetch("http://54.243.238.129:8082/allVenues")
            .then(resp => resp.json())
            .then(obj => setVenue(obj))
    }, [])

    return (

        <div className="card shadow" style={{ width: "50%", right: "-25%", top: "50px", animation: "ease-in-out", opacity: "0.9" }} >
            <div className="card-body">
                <div>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-6 text-center mb-5">

                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <h4 className="text-center mb-4">Venue Database</h4>
                                <div className="table-wrap">
                                    <table className="table table-striped table-hover">
                                        <thead className="justify-content-center thead-primary">
                                            <tr style={{textAlign:"center"}}>
                                                <th >Sr No.</th>
                                                <th > Venue Name</th>
                                                <th >City</th>
                                            </tr>

                                        </thead>
                                        <tbody>
                                            {
                                                venues.map(ut => {

                                                    return <tr style={{textAlign:"center"}}>
                                                        <td>{++x}</td>
                                                        <td>{ut.venue_name} </td>
                                                        <td>{ut.venue_city}</td>
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