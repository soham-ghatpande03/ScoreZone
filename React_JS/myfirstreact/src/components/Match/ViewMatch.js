
import { useEffect, useState } from "react"
import "./mtch.css"
export default function ViewMatch() {

    const[tours,setTours] = useState([]);
    const[matches,setMatch] = useState([]);


    useEffect(()=>{

        fetch("http://localhost:8082/getTournaments")
        .then((resp) => resp.json() )
        .then((obj)=>setTours(obj))
    },[])

    useEffect(()=>{

        fetch("http://localhost:3000/getTeams?tourid=")
        .then((resp)=>resp.json())
        .then ((obj) => setMatch(obj))
    })

    return(

        <div>
  
    <div class="main">
    <select>
        <option>Select A Tournament</option>
            {
                tours.map(tour => {
                    return <option>
                        {tour.tournament_title}
                    </option>
            })
            }
            </select>

{
    matches.map( match => {

        return <div>
        <table class="table">
       <br/>
       <br/>
        <tr>
            <td>
                <img class="flag" src="https://i.imgur.com/717RRSi.png" height="100px" width="100px"alt=""/>&emsp;<span>IND</span><br/><br/>
                <p class="score">336/5</p>
                <p class="overs">(50)</p>
            </td>
            <td class="right1">
                <span>PAK</span>&emsp;<img class="flag" src="https://i.imgur.com/ZxbFH9r.png" height="100px" width="100px" alt="" /><br/><br/>
                <p class="score pak">212/6</p>
                <p class="overs pak">(40)</p>
            </td>
        </tr>
    </table>

    <br/>
    <br/>
    </div>
        })
}
    
</div>
</div>

    )
    

}