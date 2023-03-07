package com.example.demo.entities;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Column;


@Entity
@Table(name="tournament_teams")
public class TournamentTeam {
	
	@Id
	@Column(name="tournament_id")
	int tournamnet_id;
	

	@Column(name="team_id")
	int team_id;

	public TournamentTeam(int tournamnet_id, int team_id) {
		super();
		this.tournamnet_id = tournamnet_id;
		this.team_id = team_id;
	}

	public TournamentTeam() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getTournamnet_id() {
		return tournamnet_id;
	}

	public void setTournamnet_id(int tournamnet_id) {
		this.tournamnet_id = tournamnet_id;
	}

	public int getTeam_id() {
		return team_id;
	}

	public void setTeam_id(int team_id) {
		this.team_id = team_id;
	}
	
	
	
	
	
}
