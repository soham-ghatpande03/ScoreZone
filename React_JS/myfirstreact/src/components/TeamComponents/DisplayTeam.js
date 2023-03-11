import { useReducer, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
var Viewteam = () => {

	var nav = useNavigate();
	var x = 0;
	const teamanager = JSON.parse(localStorage.getItem("loggedTeamMan")).uid;

	const [players, setPlayer] = useState([]);
	useEffect(() => {
		fetch("http://localhost:8082/getPlayersByTeam?team_id=" + teamanager)
			.then(resp => resp.json())
			.then(obj => setPlayer(obj))
	}, [])


	let addPlayer = () =>{
		
		nav("/tem_home/addplayer");
	}

	return (
		<div className="card shadow text-center" style={{ width: "40%", right: "-30%", top: "3%", animation: "ease-in-out", opacity: "0.92", fontSize: "15px", fontFamily: "Century Gothic" }} >
			<div className="card-body">
				<div className="row justify-content-center">
					<div className="col-md-6 text-center mb-5">
					</div>
				</div>
				<div className="row">
					<div className="col-md-12">
						{
							players.length > 0 ?
								<div>
									<h4 className="text-center mb-4">My Players</h4>
									<div className="table-wrap">
										<table className="table">
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
								: <h2>No Players Added</h2>
						}

						<button
						className="btn btn-primary"
						type="button"
						onClick ={() => {addPlayer()}}
						>Add Player</button>
					</div>
				</div>
			</div>
		</div>
	)


}



var ViewAllTeams = () => {

	const [allteam, setAllTeam] = useState([]);
	useEffect(() => {
		fetch("http://localhost:8082/getTeams")
			.then(resp => resp.json())
			.then(obj => { setAllTeam(obj) })
	}, [])

	console.log(allteam)

	return (
		<div>
			{
				allteam.map(team => {

					return <div>
						<div className="card shadow" style={{ width: "30%", right: "-35%", top: "50px", animation: "ease-in-out", opacity: "0.8" }} >
							<div className="card-body">
								<div className="row justify-content-between align-items-center">
									<div className="col-12 text-center">
										<a href="#">
											<h5>{team.team_name}</h5>
											<img src={team.team_logo} height="200px" width="200px" />
										</a>
									</div>
								</div>
							</div>
						</div>
						<br />
					</div>

				})
			}

		</div>
	)
}
export { Viewteam, ViewAllTeams }