package com.example.demo.entities;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Column;


@Entity
@Table(name="tournament_teams")
@IdClass(TournamentTeamId.class)
public class TournamentTeam  {
	
	@Id
	@OneToOne
	@JoinColumn(name="tournament_id")
	Tournament tournament_id;
	
	@Id
	@OneToOne
	@JoinColumn(name="team_id")
	Team team_id;

	public TournamentTeam() {
		super();
		// TODO Auto-generated constructor stub
	}

	public TournamentTeam(Tournament tournament_id, Team team_id) {
		super();
		this.tournament_id = tournament_id;
		this.team_id = team_id;
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

	
	
}