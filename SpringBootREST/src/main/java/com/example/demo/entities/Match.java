package com.example.demo.entities;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Table(name="matches")
public class Match {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int MATCH_ID;
	
	@Column
	int TOURNAMENT_ID, TEAM_ID_A, TEAM_ID_B, TEAM_A_SCORE, TEAM_B_SCORE, MATCH_STATUS;
	
	@Column
	String MATCH_VENUE;
	

	@JsonFormat(pattern = "DD-MM-YYYY")
	@Column
	Date MATCH_DATE;
	
	@Column
	String REMARKS;

	public Match() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Match(int mATCH_ID, int tOURNAMENT_ID, int tEAM_ID_A, int tEAM_ID_B, int tEAM_A_SCORE, int tEAM_B_SCORE,
			int mATCH_STATUS, String mATCH_VENUE, Date mATCH_DATE, String rEMARKS) {
		super();
		MATCH_ID = mATCH_ID;
		TOURNAMENT_ID = tOURNAMENT_ID;
		TEAM_ID_A = tEAM_ID_A;
		TEAM_ID_B = tEAM_ID_B;
		TEAM_A_SCORE = tEAM_A_SCORE;
		TEAM_B_SCORE = tEAM_B_SCORE;
		MATCH_STATUS = mATCH_STATUS;
		MATCH_VENUE = mATCH_VENUE;
		MATCH_DATE = mATCH_DATE;
		REMARKS = rEMARKS;
	}

	public int getMATCH_ID() {
		return MATCH_ID;
	}

	public void setMATCH_ID(int mATCH_ID) {
		MATCH_ID = mATCH_ID;
	}

	public int getTOURNAMENT_ID() {
		return TOURNAMENT_ID;
	}

	public void setTOURNAMENT_ID(int tOURNAMENT_ID) {
		TOURNAMENT_ID = tOURNAMENT_ID;
	}

	public int getTEAM_ID_A() {
		return TEAM_ID_A;
	}

	public void setTEAM_ID_A(int tEAM_ID_A) {
		TEAM_ID_A = tEAM_ID_A;
	}

	public int getTEAM_ID_B() {
		return TEAM_ID_B;
	}

	public void setTEAM_ID_B(int tEAM_ID_B) {
		TEAM_ID_B = tEAM_ID_B;
	}

	public int getTEAM_A_SCORE() {
		return TEAM_A_SCORE;
	}

	public void setTEAM_A_SCORE(int tEAM_A_SCORE) {
		TEAM_A_SCORE = tEAM_A_SCORE;
	}

	public int getTEAM_B_SCORE() {
		return TEAM_B_SCORE;
	}

	public void setTEAM_B_SCORE(int tEAM_B_SCORE) {
		TEAM_B_SCORE = tEAM_B_SCORE;
	}

	public int getMATCH_STATUS() {
		return MATCH_STATUS;
	}

	public void setMATCH_STATUS(int mATCH_STATUS) {
		MATCH_STATUS = mATCH_STATUS;
	}

	public String getMATCH_VENUE() {
		return MATCH_VENUE;
	}

	public void setMATCH_VENUE(String mATCH_VENUE) {
		MATCH_VENUE = mATCH_VENUE;
	}

	public Date getMATCH_DATE() {
		return MATCH_DATE;
	}

	public void setMATCH_DATE(Date mATCH_DATE) {
		MATCH_DATE = mATCH_DATE;
	}

	public String getREMARKS() {
		return REMARKS;
	}

	public void setREMARKS(String rEMARKS) {
		REMARKS = rEMARKS;
	}

	@Override
	public String toString() {
		return "Match [MATCH_ID=" + MATCH_ID + ", TOURNAMENT_ID=" + TOURNAMENT_ID + ", TEAM_ID_A=" + TEAM_ID_A
				+ ", TEAM_ID_B=" + TEAM_ID_B + ", TEAM_A_SCORE=" + TEAM_A_SCORE + ", TEAM_B_SCORE=" + TEAM_B_SCORE
				+ ", MATCH_STATUS=" + MATCH_STATUS + ", MATCH_VENUE=" + MATCH_VENUE + ", MATCH_DATE=" + MATCH_DATE
				+ ", REMARKS=" + REMARKS + "]";
	}
	
	
}
