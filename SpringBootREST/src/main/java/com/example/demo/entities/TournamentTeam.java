package com.example.demo.entities;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Column;


@Entity
@Table(name="tournament_teams")
@IdClass(TournamentTeamId.class)
public class TournamentTeam  {
	
	@Id
	@Column(name="TOURNAMENT_ID")
	int tournament_id;
	
	@Id
	@Column(name="TEAM_ID")
	int team_id;

	public int getTour_id() {
		return tournament_id;
	}

	public void setTour_id(int tournament_id) {
		this.tournament_id = tournament_id;
	}

	public int getTeam_id() {
		return team_id;
	}

	public void setTeam_id(int team_id) {
		this.team_id = team_id;
	}
	
}