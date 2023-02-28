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
@Table(name="teams")
public class Team {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	int TEAM_ID;
	
	@Column
	String TEAM_NAME;
	
	@Column
	String TEAM_MANAGER_ID;
	
	@JsonFormat(pattern = "yyyy-MM-dd")
	@Column
	Date REGISTRATION_DATE;
	
	@Column
	String TEAM_DESCRIPTION;

	public Team() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Team(int tEAM_ID, String tEAM_NAME, String tEAM_MANAGER_ID, Date rEGISTRATION_DATE,
			String tEAM_DESCRIPTION) {
		super();
		TEAM_ID = tEAM_ID;
		TEAM_NAME = tEAM_NAME;
		TEAM_MANAGER_ID = tEAM_MANAGER_ID;
		REGISTRATION_DATE = rEGISTRATION_DATE;
		TEAM_DESCRIPTION = tEAM_DESCRIPTION;
	}

	public int getTEAM_ID() {
		return TEAM_ID;
	}

	public void setTEAM_ID(int tEAM_ID) {
		TEAM_ID = tEAM_ID;
	}

	public String getTEAM_NAME() {
		return TEAM_NAME;
	}

	public void setTEAM_NAME(String tEAM_NAME) {
		TEAM_NAME = tEAM_NAME;
	}

	public String getTEAM_MANAGER_ID() {
		return TEAM_MANAGER_ID;
	}

	public void setTEAM_MANAGER_ID(String tEAM_MANAGER_ID) {
		TEAM_MANAGER_ID = tEAM_MANAGER_ID;
	}

	public Date getREGISTRATION_DATE() {
		return REGISTRATION_DATE;
	}

	public void setREGISTRATION_DATE(Date rEGISTRATION_DATE) {
		REGISTRATION_DATE = rEGISTRATION_DATE;
	}

	public String getTEAM_DESCRIPTION() {
		return TEAM_DESCRIPTION;
	}

	public void setTEAM_DESCRIPTION(String tEAM_DESCRIPTION) {
		TEAM_DESCRIPTION = tEAM_DESCRIPTION;
	}

	@Override
	public String toString() {
		return "Team [TEAM_ID=" + TEAM_ID + ", TEAM_NAME=" + TEAM_NAME + ", TEAM_MANAGER_ID=" + TEAM_MANAGER_ID
				+ ", REGISTRATION_DATE=" + REGISTRATION_DATE + ", TEAM_DESCRIPTION=" + TEAM_DESCRIPTION + "]";
	}

}
