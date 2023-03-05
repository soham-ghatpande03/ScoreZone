import {useReducer, useState, useEffect} from "react";

var Viewteam = ()=>{
    var x = 0;
    const teamanager = JSON.parse(localStorage.getItem("loggedTeamMan")).uid;
	
     const [players,setPlayer] = useState([]);
    useEffect(()=>{
    fetch("http://localhost:8082/getPlayersByTeam?team_id="+teamanager)
    .then(resp => resp.json())
    .then(obj => setPlayer(obj))
    } ,[])
		console.log(players)
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
					        <th>Player Name</th>
					        <th>Player Position</th>					        
					        <th>Goals</th>					        					        	
					      </tr>
			
					    </thead>
						<tbody>
 {
	players.map(ut =>{

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
    )


}

var ViewAllTeams = () =>{

	const [allteam,setAllTeam] = useState([]);
    useEffect(()=>{
     fetch("http://localhost:8082/getTeams")
     .then(resp => resp.json())
     .then(obj => {setAllTeam(obj)})
    } ,[])

	console.log(allteam)

	return(
<div className="auth-wrapper">
        <div className="auth-inner">

		 { allteam.map(team => 
		 { 
			 return <div>
			 <div class="row">
  				<div class="col-12">
					<div class="card">
					<a href="#">
	 					 <div class="card-body">
						 <img style={{ alignSelf: 'center' }} src={team.team_logo}/>
						 <br/><br/>
						 <h3>{team.team_name}</h3>
			 				
			 			</div>
						 </a>
			 		</div>
					 <br></br>
				</div>
			
 		 </div>
		</div>
		 })
		}
</div>
</div>
	)
}
export {Viewteam , ViewAllTeams}