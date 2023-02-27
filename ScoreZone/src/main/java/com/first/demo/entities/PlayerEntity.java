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
	
	@Column
	int PLAYER_ID;

	@Column
	int TEAM_ID;
	
	@Column
	String FIRST_NAME;
	
	@Column
	String LAST_NAME;
	
	@Column
	String PLAYER_POSITION;
	
	@Column
	String PLAYER_BIRTHDATE;
	
	@Column
	int GOALS;
	
	@Column
	int PLAYER_STATUS;
	
	
	
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

	public int getPLAYER_ID() {
		return PLAYER_ID;
	}



	public void setPLAYER_ID(int pLAYER_ID) {
		PLAYER_ID = pLAYER_ID;
	}



	public int getTEAM_ID() {
		return TEAM_ID;
	}



	public void setTEAM_ID(int tEAM_ID) {
		TEAM_ID = tEAM_ID;
	}



	public String getFIRST_NAME() {
		return FIRST_NAME;
	}



	public void setFIRST_NAME(String fIRST_NAME) {
		FIRST_NAME = fIRST_NAME;
	}



	public String getLAST_NAME() {
		return LAST_NAME;
	}



	public void setLAST_NAME(String lAST_NAME) {
		LAST_NAME = lAST_NAME;
	}



	public String getPLAYER_POSITION() {
		return PLAYER_POSITION;
	}



	public void setPLAYER_POSITION(String pLAYER_POSITION) {
		PLAYER_POSITION = pLAYER_POSITION;
	}



	public String getPLAYER_BIRTHDATE() {
		return PLAYER_BIRTHDATE;
	}



	public void setPLAYER_BIRTHDATE(String pLAYER_BIRTHDATE) {
		PLAYER_BIRTHDATE = pLAYER_BIRTHDATE;
	}



	public int getGOALS() {
		return GOALS;
	}



	public void setGOALS(int gOALS) {
		GOALS = gOALS;
	}



	public int getPLAYER_STATUS() {
		return PLAYER_STATUS;
	}



	public void setPLAYER_STATUS(int pLAYER_STATUS) {
		PLAYER_STATUS = pLAYER_STATUS;
	}

	
	
	
}
