import {useReducer, useState, useEffect} from "react";
var ApproveTourMan = ()=>{

    const [utour,setUTour] = useState([]);
    useEffect(()=>{
     fetch("http://localhost:8082/approveTourMan")
     .then(resp => resp.json())
     .then(obj => setUTour(obj))
    } ,[])


    return(
        <div>
<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-6 text-center mb-5">
					
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<h4 class="text-center mb-4">List of Pending Approvals </h4>
					<div class="table-wrap">
						<table class="table">
					    <thead class="thead-primary">
					      <tr>
					        <th>Tournament Manager ID</th>
					        <th>Tournament Manager Name</th>
					        <th>Email</th>
					        <th>UserName</th>					        
					        <th colSpan="2" style={ {textAlign:"center"}}>Remark </th>		
					      </tr>
			
					    </thead>
						<tbody>
{
	utour.map(ut =>{

		return <tr> <td>{ut.uid}</td>
		<td>{ut.first_name} {ut.last_name}</td>
		<td>{ut.email}</td>
		<td>{ut.username}</td>
		<td><a href="#" class="btn btn-primary">Approve</a></td>
		<td><a href="#" class="btn btn-danger">Reject</a></td>
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

var ApproveTeamMan = ()=>{

    const [uteam,setUTeam] = useState([]);
    useEffect(()=>{
     fetch("http://localhost:8082/approveTeamMan")
     .then(resp => resp.json())
     .then(obj => setUTeam(obj))
    } ,[])

	const [appteamM,appTeam] = useState();
    useEffect(()=>{
     fetch("http://localhost:8082/updateTeamManStatus?uid=")
     .then(resp => resp.json())
     .then(obj => appTeam(obj))
    } ,[])

    return(
		<div className="auth-wrapper">
		
        <div>
<div class="container">
			<div class="row justify-content-center">
				<div class="col-md-6 text-center mb-5">
					
				</div>
			</div>
			<div class="row">
				<div class="col-md-12">
					<h4 class="text-center mb-4">List of Pending Approvals </h4>
					<div class="table-wrap">
						<table class="table">
					    <thead class="thead-primary">
					      <tr>
					        <th>Team Manager ID</th>
					        <th>Team Manager Name</th>
					        <th>Email</th>
					        <th>UserName</th>					        
					        <th colSpan="2" align="center">Remark </th>
					      </tr>
			
					    </thead>
						<tbody>
{
	uteam.map(uut =>{
		return <tr> <td>{uut.uid}</td>
		<td>{uut.first_name} {uut.last_name}</td>
		<td>{uut.email}</td>
		<td>{uut.username}</td>
		<td><button type="submit" className="btn btn-primary" onClick={(e)=>{}}>Approve</button></td>
		<td><button type="submit" className="btn btn-danger" >Reject</button></td>
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
		
    )
}

export {ApproveTeamMan , ApproveTourMan};