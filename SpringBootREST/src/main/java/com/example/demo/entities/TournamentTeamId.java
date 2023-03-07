package com.example.demo.entities;

import java.io.Serializable;

public class TournamentTeamId implements Serializable{
	
	int tournament_id;
	int team_id;
	public int getTournament_id() {
		return tournament_id;
	}
	public void setTournament_id(int tournament_id) {
		this.tournament_id = tournament_id;
	}
	public int getTeam_id() {
		return team_id;
	}
	public void setTeam_id(int team_id) {
		this.team_id = team_id;
	}
	
	

}
