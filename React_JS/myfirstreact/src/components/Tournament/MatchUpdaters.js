import { useEffect,  useState } from "react"
import MuHome from "../MuHome";

export default function MatchUpdaters()
{
    var tmid = JSON.parse(localStorage.getItem("loggedTourMan")).uid;
    const[mu, setMu] = useState([])
    const[obj , setObj] = useState([])
    var x = 0 ;

    useEffect(() => {
        fetch("http://localhost:8082/getMatchUpdatersId?tmid=" + tmid)
        .then(resp => resp.json())
        .then(obj => setMu(obj))
    },[])
    console.log(mu.length + "......")

        useEffect (() =>{
            fetch("http://localhost:8082/getMU?uid=" + mu)
            .then(resp => resp.json())
            .then(object => {setObj(object)
            console.log(object)}
            )
        },[])
    

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
                                    
                                    mu.forEach((e) => {
                            
                                        return( 
                                            <tr> 
                                            <td>{x++}</td>
                                            <td>{obj.first_name}</td> 
                                            <td>{obj.last_name}</td>
                                            </tr>       
                                            )
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