package com.example.demo.entities;

import java.io.Serializable;

public class TournamentTeamId implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	Tournament tournament_id;
	Team team_id;
	public TournamentTeamId() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Tournament getTournament_id() {
		return tournament_id;
	}
	public void setTournament_id(Tournament tournament_id) {
		this.tournament_id = tournament_id;
	}
	public Team getTeam_id() {
		return team_id;
	}
	public void setTeam_id(Team team_id) {
		this.team_id = team_id;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	
	
	
	}
	
	
	

