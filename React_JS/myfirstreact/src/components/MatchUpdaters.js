import { useEffect } from "react"

export default function MatchUpdaters()
{
    const[mu, setMu] = useState([])
    var x = 0 ;
    useEffect(() => {
        fetch("http://localhost:8082/getMatchUpdaters")
        .then(resp => resp.json())
        .then(obj => setMu(obj))
    })
    return(
        <div>
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-md-6 text-center mb-5">					
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <h4 class="text-center mb-4">My Players</h4>
                        <div class="table-wrap">
                            <table class="table">
                                <thead class="thead-primary">
                                    <tr>
                                        <th>Sr No.</th>
                                        <th colSpan={2}>Match Updater Name</th>				        					        	
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    mu.map(m =>{
                                        return 
                                        <tr> 
                                        <td>{++x}</td>
                                        <td>{m.first_name} {m.last_name}</td>
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
    )
}