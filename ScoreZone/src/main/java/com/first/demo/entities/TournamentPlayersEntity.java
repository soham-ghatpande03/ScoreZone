package com.first.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="tournament_players")

public class TournamentPlayersEntity {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	
	@Column(name="PLAYER_ID")
	int player_id;
	
	@Column(name="TOURNAMENT_ID")
	int tournament_id;
	
	@Column(name="TOURNAMENT_GOALS")
	int tournament_goals;
	
	

	public TournamentPlayersEntity(int player_id, int tournament_id, int tournament_goals) {
		super();
		this.player_id = player_id;
		this.tournament_id = tournament_id;
		this.tournament_goals = tournament_goals;
	}

	public int getPlayer_id() {
		return player_id;
	}

	public void setPlayer_id(int player_id) {
		this.player_id = player_id;
	}

	public int getTournament_id() {
		return tournament_id;
	}

	public void setTournament_id(int tournament_id) {
		this.tournament_id = tournament_id;
	}

	public int getTournament_goals() {
		return tournament_goals;
	}

	public void setTournament_goals(int tournament_goals) {
		this.tournament_goals = tournament_goals;
	}

	
	
	
	
	
	

}
