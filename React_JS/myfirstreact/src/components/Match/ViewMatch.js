
import { useEffect, useState } from "react"

export default function ViewMatch() {

    const[tours,setTours] = useState([]);
    const[matches,setMatch] = useState([]);


    useEffect(()=>{

        fetch("http://localhost:8082/getTournaments")
        .then((resp) => resp.json() )
        .then((obj)=>setTours(obj))
    },[])

    const gettour = (uid)=>{
        console.log(uid)
        fetch("http://localhost:8082/matchByTourId?tour="+uid)
        .then((resp)=>resp.json())
        .then ((obj) => setMatch(obj))
    }

    return(

        <div>
  
    <div class="main">
    <select onChange={(e) => gettour(e.target.value)}>
        <option>Select A Tournament</option>
            {
                tours.map(tour => {
                    return <option value={tour.tournament_id}>
                        {tour.tournament_title}
                    </option>
                    
            })
            }
            </select>
            <div><br/></div>

{
    matches.map(match => {

        return <div className="auth-wrapper">
        <div className="auth-inner">
            <table class=" 
            align-middle">
                    <tbody>
                    <tr>
                           <td colSpan="4">
                                <h3>Match No: {match.match_id}</h3>
                           </td>
                        </tr>
                        <tr>
                           <td colSpan="">
                            <img src={match.team_id_a.team_logo} height="200px" width="200px"></img>
                           </td>
                           <td colSpan="">
                                <h1> - {match.team_a_score}</h1>
                           </td>
                           <td colSpan="">
                                <h1> {match.team_b_score} - </h1>
                           </td>
                           <td colSpan="">
                            <img src={match.team_id_b.team_logo} height="200px" width="200px"></img>
                           </td>
                        </tr>
                        <tr  >
                           <td colSpan="2">
                          <h3>{match.team_id_a.team_name}</h3>
                           </td>
                           <td colSpan="2">
                           <h3>{match.team_id_b.team_name}</h3>
                           </td>
                        </tr>
                        <tr>
                           <td colSpan="4">
                                <h3>Venue: {match.match_venue}</h3>
                           </td>
                        </tr>
                    </tbody>
            </table>
        </div>
        </div>  
        })
}
</div>
</div>
    )
    

}