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
@Table(name="tournaments")
public class Tournament {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int TOURNAMENT_ID;
	
	@Column
	String TOURNAMENT_TITLE;
	
	@Column
	int TOURNAMENT_MANAGER_ID;
	

	@JsonFormat(pattern = "DD-MM-YYYY")
	@Column
	Date START_DATE, END_DATE, PARTICIPATION_DEADLINE;
	
	@Column
	int TOURNAMENT_STATUS;

	public Tournament() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Tournament(int tOURNAMENT_ID, String tOURNAMENT_TITLE, int tOURNAMENT_MANAGER_ID, Date sTART_DATE,
			Date eND_DATE, Date pARTICIPATION_DEADLINE, int tOURNAMENT_STATUS) {
		super();
		TOURNAMENT_ID = tOURNAMENT_ID;
		TOURNAMENT_TITLE = tOURNAMENT_TITLE;
		TOURNAMENT_MANAGER_ID = tOURNAMENT_MANAGER_ID;
		START_DATE = sTART_DATE;
		END_DATE = eND_DATE;
		PARTICIPATION_DEADLINE = pARTICIPATION_DEADLINE;
		TOURNAMENT_STATUS = tOURNAMENT_STATUS;
	}

	public int getTOURNAMENT_ID() {
		return TOURNAMENT_ID;
	}

	public void setTOURNAMENT_ID(int tOURNAMENT_ID) {
		TOURNAMENT_ID = tOURNAMENT_ID;
	}

	public String getTOURNAMENT_TITLE() {
		return TOURNAMENT_TITLE;
	}

	public void setTOURNAMENT_TITLE(String tOURNAMENT_TITLE) {
		TOURNAMENT_TITLE = tOURNAMENT_TITLE;
	}

	public int getTOURNAMENT_MANAGER_ID() {
		return TOURNAMENT_MANAGER_ID;
	}

	public void setTOURNAMENT_MANAGER_ID(int tOURNAMENT_MANAGER_ID) {
		TOURNAMENT_MANAGER_ID = tOURNAMENT_MANAGER_ID;
	}

	public Date getSTART_DATE() {
		return START_DATE;
	}

	public void setSTART_DATE(Date sTART_DATE) {
		START_DATE = sTART_DATE;
	}

	public Date getEND_DATE() {
		return END_DATE;
	}

	public void setEND_DATE(Date eND_DATE) {
		END_DATE = eND_DATE;
	}

	public Date getPARTICIPATION_DEADLINE() {
		return PARTICIPATION_DEADLINE;
	}

	public void setPARTICIPATION_DEADLINE(Date pARTICIPATION_DEADLINE) {
		PARTICIPATION_DEADLINE = pARTICIPATION_DEADLINE;
	}

	public int getTOURNAMENT_STATUS() {
		return TOURNAMENT_STATUS;
	}

	public void setTOURNAMENT_STATUS(int tOURNAMENT_STATUS) {
		TOURNAMENT_STATUS = tOURNAMENT_STATUS;
	}

	@Override
	public String toString() {
		return "Tournament [TOURNAMENT_ID=" + TOURNAMENT_ID + ", TOURNAMENT_TITLE=" + TOURNAMENT_TITLE
				+ ", TOURNAMENT_MANAGER_ID=" + TOURNAMENT_MANAGER_ID + ", START_DATE=" + START_DATE + ", END_DATE="
				+ END_DATE + ", PARTICIPATION_DEADLINE=" + PARTICIPATION_DEADLINE + ", TOURNAMENT_STATUS="
				+ TOURNAMENT_STATUS + "]";
	}
	
	
}
