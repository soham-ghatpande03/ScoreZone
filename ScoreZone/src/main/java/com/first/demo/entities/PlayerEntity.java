package com.first.demo.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name="players")
public class PlayerEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	
	@Column(name="PLAYER_ID")
	int player_id ;

	@Column(name="TEAM_ID")
	int team_id ;
	
	@Column(name="FIRST_NAME")
	String first_name;
	
	@Column(name="LAST_NAME")
	String last_name;
	
	@Column(name="PLAYER_POSITION")
	String player_position;
	
	@Column(name="PLAYER_BIRTHDATE")
	String player_birthdate;
	
	@Column(name="GOALS")
	int goals;
	
	@Column(name="PLAYER_STATUS")
	int players_status;
	
	
	
	//Constructor
	
	
	public PlayerEntity() {
//	super();
//	PLAYER_ID = 1;
//	TEAM_ID = 1;
//	FIRST_NAME = "testf";
//	LAST_NAME = "testl";
//	PLAYER_POSITION = "gtest";
//	PLAYER_BIRTHDATE = "1920-11-11";
//	GOALS = 4;
//	PLAYER_STATUS = 1;
	}

//	public PlayerEntity(int pLAYER_ID, int tEAM_ID, String fIRST_NAME, String lAST_NAME, String pLAYER_POSITION,
//			String pLAYER_BIRTHDATE, int gOALS, int pLAYER_STATUS) {
//		super();
//		PLAYER_ID = pLAYER_ID;
//		TEAM_ID = tEAM_ID;
//		FIRST_NAME = fIRST_NAME;
//		LAST_NAME = lAST_NAME;
//		PLAYER_POSITION = pLAYER_POSITION;
//		PLAYER_BIRTHDATE = pLAYER_BIRTHDATE;
//		GOALS = gOALS;
//		PLAYER_STATUS = pLAYER_STATUS;
//	}

	//getters/setters

	public int getPlayer_id() {
		return player_id;
	}



	public void setPlayer_id(int player_id) {
		this.player_id = player_id;
	}



	public int getTeam_id() {
		return team_id;
	}



	public void setTeam_id(int team_id) {
		this.team_id = team_id;
	}



	public String getFirst_name() {
		return first_name;
	}



	public void setFirst_name(String first_name) {
		this.first_name = first_name;
	}



	public String getLast_name() {
		return last_name;
	}



	public void setLast_name(String last_name) {
		this.last_name = last_name;
	}



	public String getPlayer_position() {
		return player_position;
	}



	public void setPlayer_position(String player_position) {
		this.player_position = player_position;
	}



	public String getPlayer_birthdate() {
		return player_birthdate;
	}



	public void setPlayer_birthdate(String player_birthdate) {
		this.player_birthdate = player_birthdate;
	}



	public int getGoals() {
		return goals;
	}



	public void setGoals(int goals) {
		this.goals = goals;
	}



	public int getPlayers_status() {
		return players_status;
	}



	public void setPlayers_status(int players_status) {
		this.players_status = players_status;
	}
	
	

	



	
	
	
}
