package com.example.demo.entities;

import java.sql.Date;


public class DummyMatch {
	

	int match_id;
	
	
	int tournament_id;
	
	
	Integer team_id_a;
	
	
	Integer team_id_b;
	
	
	Integer team_a_score;
	
	
	Integer team_b_score;
	
	
	int match_status;
	
	
	String match_venue;
	
	
	Date match_date;
	

	String remarks;

	public DummyMatch() {
		super();
	}
	
	

	public DummyMatch(int match_id, int tournament_id, Integer team_id_a, Integer team_id_b, Integer team_a_score,
			Integer team_b_score, int match_status, String match_venue, Date match_date, String remarks) {
		super();
		this.match_id = match_id;
		this.tournament_id = tournament_id;
		this.team_id_a = team_id_a;
		this.team_id_b = team_id_b;
		this.team_a_score = team_a_score;
		this.team_b_score = team_b_score;
		this.match_status = match_status;
		this.match_venue = match_venue;
		this.match_date = match_date;
		this.remarks = remarks;
	}



	public int getMatch_id() {
		return match_id;
	}

	public void setMatch_id(int match_id) {
		this.match_id = match_id;
	}

	public int getTournament_id() {
		return tournament_id;
	}

	public void setTournament_id(int tournament_id) {
		this.tournament_id = tournament_id;
	}

	public Integer getTeam_id_a() {
		return team_id_a;
	}

	public void setTeam_id_a(Integer team_id_a) {
		this.team_id_a = team_id_a;
	}

	public Integer getTeam_id_b() {
		return team_id_b;
	}

	public void setTeam_id_b(Integer team_id_b) {
		this.team_id_b = team_id_b;
	}

	public Integer getTeam_a_score() {
		return team_a_score;
	}

	public void setTeam_a_score(Integer team_a_score) {
		this.team_a_score = team_a_score;
	}

	public Integer getTeam_b_score() {
		return team_b_score;
	}

	public void setTeam_b_score(Integer team_b_score) {
		this.team_b_score = team_b_score;
	}

	public int getMatch_status() {
		return match_status;
	}

	public void setMatch_status(int match_status) {
		this.match_status = match_status;
	}

	public String getMatch_venue() {
		return match_venue;
	}

	public void setMatch_venue(String match_venue) {
		this.match_venue = match_venue;
	}

	public Date getMatch_date() {
		return match_date;
	}

	public void setMatch_date(Date match_date) {
		this.match_date = match_date;
	}

	public String getRemarks() {
		return remarks;
	}

	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}

	

	
}
