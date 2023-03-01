package com.example.demo.entities;

import java.sql.Date;

public class DummyTeam {

	
	int team_id;
	

	String team_name;
	

	String team_manager_id;
	


	Date registration_date;
	
	
	String team_description;
	

	byte[] team_logo;
	

	public DummyTeam() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public DummyTeam(int team_id, String team_name, String team_manager_id, Date registration_date, String team_description,
			byte[] team_logo) {
		super();
		this.team_id = team_id;
		this.team_name = team_name;
		this.team_manager_id = team_manager_id;
		this.registration_date = registration_date;
		this.team_description = team_description;
		this.team_logo = team_logo;
	}

	public byte[] getTeam_logo() {
		return team_logo;
	}

	public void setTeam_logo(byte[] team_logo) {
		this.team_logo = team_logo;
	}

	public int getTeam_id() {
		return team_id;
	}

	public void setTeam_id(int team_id) {
		this.team_id = team_id;
	}

	public String getTeam_name() {
		return team_name;
	}

	public void setTeam_name(String team_name) {
		this.team_name = team_name;
	}

	public String getTeam_manager_id() {
		return team_manager_id;
	}

	public void setTeam_manager_id(String team_manager_id) {
		this.team_manager_id = team_manager_id;
	}

	public Date getRegistration_date() {
		return registration_date;
	}

	public void setRegistration_date(Date registration_date) {
		this.registration_date = registration_date;
	}

	public String getTeam_description() {
		return team_description;
	}

	public void setTeam_description(String team_description) {
		this.team_description = team_description;
	}

	

}
