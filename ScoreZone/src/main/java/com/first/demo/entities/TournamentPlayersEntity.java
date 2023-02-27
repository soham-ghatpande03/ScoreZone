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
	
	@Column
	int PLAYER_ID;
	
	@Column
	int TOURNAMENT_ID;
	
	@Column
	int TOURNAMENT_GOALS;

	public TournamentPlayersEntity() {
		PLAYER_ID=1;
		TOURNAMENT_ID=4;
		TOURNAMENT_GOALS=45;
	}
	
	public TournamentPlayersEntity(int pLAYER_ID, int tOURNAMENT_ID, int tOURNAMENT_GOALS) {
		super();
		PLAYER_ID = pLAYER_ID;
		TOURNAMENT_ID = tOURNAMENT_ID;
		TOURNAMENT_GOALS = tOURNAMENT_GOALS;
	}

	public int getPLAYER_ID() {
		return PLAYER_ID;
	}

	public void setPLAYER_ID(int pLAYER_ID) {
		PLAYER_ID = pLAYER_ID;
	}

	public int getTOURNAMENT_ID() {
		return TOURNAMENT_ID;
	}

	public void setTOURNAMENT_ID(int tOURNAMENT_ID) {
		TOURNAMENT_ID = tOURNAMENT_ID;
	}

	public int getTOURNAMENT_GOALS() {
		return TOURNAMENT_GOALS;
	}

	public void setTOURNAMENT_GOALS(int tOURNAMENT_GOALS) {
		TOURNAMENT_GOALS = tOURNAMENT_GOALS;
	}
	
	
	
	
	
	

}
