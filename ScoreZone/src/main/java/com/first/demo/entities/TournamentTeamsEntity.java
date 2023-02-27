package com.first.demo.entities;

import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Column;


@Entity
@Table(name="tournament_teams")
public class TournamentTeamsEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	@Column
	int TOURNAMENT_ID;
	
	@Column
	int TEAM_ID;
	
	
	public TournamentTeamsEntity() {
		TOURNAMENT_ID = 101;
		TEAM_ID =101;
	}
	
	
	

	public TournamentTeamsEntity(int tOURNAMENT_ID, int tEAM_ID) {
		TOURNAMENT_ID = tOURNAMENT_ID;
		TEAM_ID = tEAM_ID;
	}
	

	public int getTOURNAMENT_ID() {
		return TOURNAMENT_ID;
	}

	public void setTOURNAMENT_ID(int tOURNAMENT_ID) {
		TOURNAMENT_ID = tOURNAMENT_ID;
	}

	public int getTEAM_ID() {
		return TEAM_ID;
	}

	public void setTEAM_ID(int tEAM_ID) {
		TEAM_ID = tEAM_ID;
	}
	
	
	
	
	
	
}
